import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from '../layout/header/header.component';

const routes: Routes = [
    {path: 'system', component: HeaderComponent, loadChildren: './system/system.module#SystemModule'},
    {path: 'security', component: HeaderComponent, loadChildren: './security/security.module#SecurityModule'},
    {path: 'monitor', component: HeaderComponent, loadChildren: './monitor/monitor.module#MonitorModule'},
    {path: 'asset', component: HeaderComponent, loadChildren: './asset/asset.module#AssetModule'},
    {path: 'report', component: HeaderComponent, loadChildren: './report/report.module#ReportModule'},
    {path: 'log', component: HeaderComponent, loadChildren: './log/log.module#LogModule'},
    {path: 'threat', component: HeaderComponent, loadChildren: './threat/threat.module#ThreatModule'},
    { path: '', redirectTo: '/pages/monitor/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
