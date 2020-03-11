import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: 'user', component: UserComponent, outlet: 'LazyLoading' },
    { path: 'dashboard', component: DashboardComponent, outlet: 'LazyLoading' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }

