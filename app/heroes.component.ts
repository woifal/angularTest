import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
    styleUrls: ['app/heroes.css']
})
export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }
    getHeroes(): void {
        //  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        //  this.heroes = this.heroService.getHeroesPlain();
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
   	}
   	ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}