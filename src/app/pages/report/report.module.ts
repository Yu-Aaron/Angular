import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
