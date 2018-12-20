import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunninglogComponent} from './runninglog/runninglog.component';
import {OperateComponent} from './operate/operate.component';
import {PolicyComponent} from './policy/policy.component';

const routes: Routes = [
  {path: 'runninglog', component: RunninglogComponent},
  {path: 'operate', component: OperateComponent},
  {path: 'policy', component: PolicyComponent},
  { path: '', redirectTo: '/pages/log/runninglog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
