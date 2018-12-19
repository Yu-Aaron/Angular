import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '../layout/layout.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    NgZorroAntdModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
