import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecincidentComponent } from './secincident/secincident.component';
import { NetworksessionComponent } from './networksession/networksession.component';
import { ProtocolComponent } from './protocol/protocol.component';
import { FlowComponent } from './flow/flow.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [SecincidentComponent, NetworksessionComponent, ProtocolComponent, FlowComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
