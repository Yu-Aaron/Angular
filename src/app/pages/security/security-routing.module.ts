import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SecincidentComponent} from './secincident/secincident.component';
import {NetworksessionComponent} from './networksession/networksession.component';
import {ProtocolComponent} from './protocol/protocol.component';
import {FlowComponent} from './flow/flow.component';


const routes: Routes = [
  {path: 'secincident', component: SecincidentComponent},
  {path: 'networksession', component: NetworksessionComponent},
  {path: 'protocol', component: ProtocolComponent},
  {path: 'flow', component: FlowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
