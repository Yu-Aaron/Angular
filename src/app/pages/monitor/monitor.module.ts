import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { OverviewComponent } from './overview/overview.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { }
