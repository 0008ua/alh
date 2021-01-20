import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../user/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login-form/login-form.module').then((m) => m.LoginFormPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( (m) => m.ProfilePageModule),
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
export class UserPageRoutingModule {}
