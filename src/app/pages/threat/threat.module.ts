import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreatRoutingModule } from './threat-routing.module';
import { FeaturelibComponent } from './featurelib/featurelib.component';
import {LayoutModule} from '../../layout/layout.module';

@NgModule({
  declarations: [FeaturelibComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ThreatRoutingModule
  ]
})
export class ThreatModule { }
