import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'table-test',
  template: `
<!--
    <vaadin-grid id="m" [items]="heroes" (selected-items-changed)="onSelectedItemsChanged($event)">
      <table>
        <colgroup>
          <col name="id">
          <col name="name">
          <col name="birthday">
        </colgroup>
      </table>
    </vaadin-grid>
-->
	<div class="m-container">
	<table class="m">
		<thead>
			<th>eins</th>
			<th>aaaa</th>
			<th>1111</th>
			<th>eins</th>
			<th>aaaa</th>
			<th>1111</th>
			<th>...</th>
		</thead>
		<tbody>
			<tr>
				<td>eins</td>
				<td>aaaa</td>
				<td>1111</td>
				<td>eins</td>
				<td>aaaa</td>
				<td>1111</td>
				<td>
					<paper-icon-button 
						icon="add-box" 
					></paper-icon-button>
					<paper-icon-button 
						icon="delete" 
					></paper-icon-button>
				</td>
			</tr>
			<tr>
				<td>zwei</td>
				<td>bbbb</td>
				<td>2222</td>
				<td>zwei</td>
				<td>bbbb</td>
				<td>2222</td>
				<td>
					<paper-icon-button 
						icon="add-box" 
					></paper-icon-button>
					<paper-icon-button 
						icon="delete" 
					></paper-icon-button>
				</td>
			</tr>
			<tr>
				<td>drei</td>
				<td>cccc</td>
				<td>3333</td>
				<td>drei</td>
				<td>cccc</td>
				<td>3333</td>
				<td>
					<paper-icon-button 
						icon="add-box" 
					></paper-icon-button>
					<paper-icon-button 
						icon="delete" 
					></paper-icon-button>
				</td>
				</tr>
			</tbody>
		</table>
		</div>
  `,
  styles: [`
    vaadin-grid {
      height: 100%;
    }
	
	
	
		table.m {
			border: 1px solid #3f51b5;
			width: 100%;
			border-collapse: collapse;
		}
		table.m tr {
			border: 1px solid #3f51b5;
			adisplay: block;
			text-align: center;
		}
		table.m td {
			padding: 5px;
			border: 1px solid green;
			adisplay: block;
		}
		table.m td:first-child {
			background-color: #FF0000;
			adisplay: none;
		}
@media only screen 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
		div.m-container {
			width: 100%;
			text-align: center;
		}
		table.m thead th:not(:last-child) {
			display: none;
		}
		table.m thead th:last-child {
			display: block;
			border: 1px solid #3f51b5;
		}
		table.m {
			border: 0px solid blue;
			width: 80%;
			border-collapse: collapse;
			text-align: center;
			margin: 0 auto;
		}
		table.m tr {
			border: 3px solid #3f51b5;
			border-radius: 10px;
			overflow: hidden;
			display: block;
			margin-top: 20px;
			text-align: center;
		}
		table.m thead tr {
			border: 2px solid red;
			background-color: #CCCCCC;
			adisplay: block;
			text-align: center;
		}
		table.m td {
			border: 1px solid #EEEEEE;
			display: block;
			font-size: 1.2em;
			line-height: 1em;
			margin: 0px;
		}
		table.m td:first-child {
			background-color: #CCCCCC;
		}
		

	}

	`]
})
export class TableTestComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private _router: Router,
    private _heroService: HeroService
  ) { }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
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
