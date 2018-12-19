import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { TopologyComponent } from './topology/topology.component';
import { SecuritydeviceComponent } from './securitydevice/securitydevice.component';
import { FactorydeviceComponent } from './factorydevice/factorydevice.component';
import { NetworkdeviceComponent } from './networkdevice/networkdevice.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [TopologyComponent, SecuritydeviceComponent, FactorydeviceComponent, NetworkdeviceComponent],
  imports: [
    CommonModule,
    LayoutModule,
    AssetRoutingModule
  ]
})
export class AssetModule { }
