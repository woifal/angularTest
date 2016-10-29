// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
	moduleId: module.id
	, templateUrl: 'hero-detail.component.html'
	, selector: 'my-hero-detail'
	, styleUrls: ['hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
	  console.log("init hero-detail-component..");
	  this.route.params.forEach((params: Params) => {
		let id = +params['id'];
		console.log("showing hero >" + id + "<");
		this.heroService.getHero(id)
		  .then(hero => this.hero = hero);
	  });
	}

	goBack(): void {
		this.location.back();
	}
	
	save(): void {
		this.heroService.update(this.hero)
		.then(() => this.goBack())
		.then(() => console.log("saved and went back."));
	}
}



