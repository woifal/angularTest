import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

declare var FooObj;
declare var FooObj2;

@Component({
  moduleId: module.id
  ,selector: 'login'
  ,templateUrl: "login.component.html"
  ,styleUrls: [ "login.component.css" ]
})
export class LoginComponent implements OnInit {
  heroes: Hero[];
  pageTitle = "Login";
  haha = "PPP";
  clLib: any;

  constructor(
    private _router: Router,
    private _heroService: HeroService
  ) { }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
    let foo = new FooObj();
    this.haha = foo.haha;
    this.haha = FooObj2["haha"];
  }

  onSelect(hero: Hero) {
    this._router.navigate(['/heroes', hero.id]);
  }

  onSelectedItemsChanged(event: any) {
    let selectedIndex: number = event.target.selection.selected()[0];
    if (selectedIndex !== undefined) {
      this.onSelect(this.heroes[selectedIndex]);
    }
  }
}
