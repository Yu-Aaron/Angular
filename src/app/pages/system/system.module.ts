import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { BusinessComponent } from './business/business.component';
import { DeviceComponent } from './device/device.component';
import { ConfigComponent } from './config/config.component';
import { UserComponent } from './user/user.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [BusinessComponent, DeviceComponent, ConfigComponent, UserComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
