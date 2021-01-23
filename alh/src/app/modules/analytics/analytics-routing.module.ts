import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';

import { AnalyticsPage } from './analytics.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'management',
    pathMatch: 'full',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'management',
    loadChildren: () => import('./management/management.module').then((m) => m.ManagementPageModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsPageRoutingModule {}
