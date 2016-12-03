import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { FooAuthGuard }  from './foo-auth-guard.service';

const routes: Routes = [
  { 
    path: ''
    ,redirectTo: '/dashboard'
    ,pathMatch: 'full'
    ,canActivate: [FooAuthGuard]
  },
  { 
    path: 'dashboard'  
    ,component: DashboardComponent 
    ,canActivate: [FooAuthGuard]
  },
  { 
    path: 'detail/:id'
    ,component: HeroDetailComponent 
    ,canActivate: [FooAuthGuard]
  },
  { 
    path: 'heroes'
    ,component: HeroesComponent 
    ,canActivate: [FooAuthGuard]
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}