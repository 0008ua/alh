import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormPage } from './login-form.page';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NoAuthGuard } from '../no-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginFormPage,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'signup',
    component: SignupFormComponent,
    canActivate: [NoAuthGuard],
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
export class LoginFormPageRoutingModule {}
