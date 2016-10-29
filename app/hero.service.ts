import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';

// STATIC data:
// import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	private heroesUrl = 'app/heroes';  // URL to web api

	constructor(private http: Http) { }
	
	
    getHeroes(): Promise<Hero[]> {
		console.log("Getting heroes from 'http' ;)");
		return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
	}
	
/*    getHeroesStatic(): Promise<Hero[]> {
//        return Promise.resolve(HEROES);
//    }
//    getHeroesPlain(): Hero[] {
//        return HEROES;
//    }
*/

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
    
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

	getHero(id: number): Promise<Hero> {
	  return this.getHeroes()
				 .then(allHeroes => allHeroes.find(someHero => someHero.id === id));
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	update(hero: Hero): Promise<Hero> {
	  const url = `${this.heroesUrl}/${hero.id}`;
	  console.log("Updating at >" + url + "<");
	  return this.http
		.put(url, JSON.stringify(hero), {headers: this.headers})
		.toPromise()
		.then(() => hero)
		.catch(this.handleError);
	}
}