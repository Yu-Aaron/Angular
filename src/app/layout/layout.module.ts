import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { DefaultComponent } from './default/default.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [HeaderComponent, DefaultComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    DefaultComponent,
    BreadcrumbComponent
  ]
})
export class LayoutModule { }
