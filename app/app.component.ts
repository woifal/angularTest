import { Component, OnInit } from '@angular/core';


@Component({
    moduleId: module.id
	, selector: 'my-app'
    , templateUrl: "app.component.html"
	/*
	: `
    <h1>{{title}}</h1>

	<nav>
	    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
		<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	</nav>
	
	<router-outlet></router-outlet>
  `*/
	, styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Angular Kurt';
}