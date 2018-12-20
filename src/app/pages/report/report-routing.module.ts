import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatisticsComponent} from './statistics/statistics.component';


const routes: Routes = [
  { path: '', redirectTo: '/pages/report/statistics', pathMatch: 'full' },
  {path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
