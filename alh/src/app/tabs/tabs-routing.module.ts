import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../modules/user/auth.guard';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'shedule',
        pathMatch: 'full',
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'shedule',
        loadChildren: () => import('../modules/shedule/shedule.module').then((m) => m.ShedulePageModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],

      },
      {
        path: 'user',
        loadChildren: () => import('../modules/user/user.module').then((m) => m.UserPageModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../modules/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: 'analytics',
        loadChildren: () => import('../modules/analytics/analytics.module').then((m) => m.AnalyticsPageModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],

      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
