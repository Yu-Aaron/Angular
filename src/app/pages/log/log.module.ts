import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { RunninglogComponent } from './runninglog/runninglog.component';
import { OperateComponent } from './operate/operate.component';
import { PolicyComponent } from './policy/policy.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [RunninglogComponent, OperateComponent, PolicyComponent],
  imports: [
    CommonModule,
    LayoutModule,
    LogRoutingModule
  ]
})
export class LogModule { }
