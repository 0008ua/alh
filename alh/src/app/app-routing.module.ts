import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/tabs/scchedule',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'schedule',
  //   loadChildren: () => import('./schedule/schedule.module').then( (m) => m.SchedulePageModule),
  // },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then( (m) => m.UserPageModule),
  // },
  // {
  //   path: 'analytics',
  //   loadChildren: () => import('./analytics/analytics.module').then( (m) => m.AnalyticsPageModule),
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( (m) => m.TabsPageModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})


export class AppRoutingModule { }
