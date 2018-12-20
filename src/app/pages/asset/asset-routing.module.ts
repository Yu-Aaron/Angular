import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopologyComponent} from './topology/topology.component';
import {SecuritydeviceComponent} from './securitydevice/securitydevice.component';
import {FactorydeviceComponent} from './factorydevice/factorydevice.component';
import {NetworkdeviceComponent} from './networkdevice/networkdevice.component';

const routes: Routes = [
  {path: 'topology', component: TopologyComponent},
  {path: 'securitydevice', component: SecuritydeviceComponent},
  {path: 'factorydevice', component: FactorydeviceComponent},
  {path: 'networkdevice', component: NetworkdeviceComponent},
  { path: '', redirectTo: '/pages/asset/topology', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
