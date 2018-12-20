import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeaturelibComponent} from './featurelib/featurelib.component';

const routes: Routes = [
  {path: 'featurelib', component: FeaturelibComponent},
  { path: '', redirectTo: '/pages/threat/featurelib', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreatRoutingModule { }
