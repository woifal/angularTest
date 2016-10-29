import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
	moduleId: module.id
    , selector: 'my-heroes'
    , templateUrl: 'heroes.component.html'
	, styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
		private router: Router,
		private heroService: HeroService
	) { }

    getHeroes(): void {
        //  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        //  this.heroes = this.heroService.getHeroesPlain();
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   	}

   	ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
	
	
	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

		
	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.heroService.create(name)
		.then(hero => {
			console.log("SAVED hero >" + JSON.stringify(hero) + "<");
			this.heroes.push(hero);
			this.selectedHero = hero;
		});
		
	}	
	
	delete(hero: Hero): void {
		this.heroService
		  .delete(hero.id)
		  .then(() => {
			// remove deleted hero from list
			this.heroes = this.heroes.filter(h => h !== hero);
			// ensure deleted hero was not selected
			if (this.selectedHero === hero) { this.selectedHero = null; }
		  });
	}
	
}