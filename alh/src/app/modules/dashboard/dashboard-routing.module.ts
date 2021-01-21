import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuard } from '../user/auth-admin.guard';

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
export class DashboardRoutingModule {}
