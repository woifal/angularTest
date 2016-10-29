import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService }         from './hero.service';
import { AppComponent }  from './app.component';
import { HeroSearchComponent } from './hero-search.component';

import { RouterModule }   from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
    imports: [
        BrowserModule
        , FormsModule
		, HttpModule
		, InMemoryWebApiModule.forRoot(InMemoryDataService)
		, AppRoutingModule
    ],
    declarations: [
        AppComponent
        , HeroDetailComponent
        , HeroesComponent
		, DashboardComponent
		, HeroSearchComponent
    ],
	
	
	
	
    providers: [
        HeroService    ],
   	bootstrap: [AppComponent]
})
export class AppModule { }
