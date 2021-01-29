import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';

import { AnalyticsPage } from './analytics.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsPage,
    children: [
      {
        path: '',
        redirectTo: 'summary',
        pathMatch: 'full',
      },
      {
        path: 'management',
        loadChildren: () => import('./management/management.module').then((m) => m.ManagementPageModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'summary',
        loadChildren: () => import('./summary/summary.module').then((m) => m.SummaryPageModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },

      // {
      //   path: '**',
      //   redirectTo: '',
      //   pathMatch: 'full',
      // },
    ],
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
export class AnalyticsPageRoutingModule { }
