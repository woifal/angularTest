import './rxjs-extensions';


import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymerElement } from '@vaadin/angular2-polymer';


import { FormsModule }   from '@angular/forms';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService }         from './hero.service';
import { AppComponent }  from './app.component';
import { HeroSearchComponent } from './hero-search.component';
import { TableTestComponent } from './table-test.component';
import { LoginComponent } from './login.component';

import { FooAuthGuard }     from './foo-auth-guard.service';

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
        , TableTestComponent
	    ,LoginComponent
        ,
        PolymerElement('app-header-layout'),
        PolymerElement('app-header'),
        PolymerElement('app-toolbar'),
        PolymerElement('paper-icon-button'),
        PolymerElement('paper-drawer-panel'),
        PolymerElement('paper-menu'),
        PolymerElement('paper-button'),
        PolymerElement('iron-icon'),
        PolymerElement('paper-item'),
        PolymerElement('paper-listbox'),
        PolymerElement('paper-submenu'),
        PolymerElement('vaadin-grid'),
        PolymerElement('paper-input'),
        PolymerElement('vaadin-date-picker')
    ],
	providers: [
        FooAuthGuard
        ,HeroService
    ],
   	bootstrap: [AppComponent]
    ,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
