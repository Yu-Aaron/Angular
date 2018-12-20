import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BusinessComponent} from './business/business.component';
import {DeviceComponent} from './device/device.component';
import {ConfigComponent} from './config/config.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  {path: 'business', component: BusinessComponent},
  {path: 'device', component: DeviceComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'user', component: UserComponent},
  { path: '', redirectTo: '/pages/system/user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
