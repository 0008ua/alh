import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuard } from '../user/auth-admin.guard';
import { AuthBlockedGuard } from '../user/auth-blocked.guard';

import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'operator',
    pathMatch: 'full',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'operator',
    loadChildren: () => import('./operator/operator.module').then((m) => m.OperatorPageModule),
    canLoad: [AuthAdminGuard],
    canActivate: [AuthAdminGuard],
  },
  {
    path: 'room',
    loadChildren: () => import('./room/room.module').then((m) => m.RoomPageModule),
    canLoad: [AuthGuard, AuthBlockedGuard],
    canActivate: [AuthGuard, AuthBlockedGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfilePageModule),
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
export class DashboardRoutingModule {}
