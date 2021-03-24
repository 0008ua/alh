import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginFormPageRoutingModule } from './login-form-routing.module';

import { LoginFormPage } from './login-form.page';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginFormPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    PipesModule,
  ],
  declarations: [LoginFormPage, SignupFormComponent],
})
export class LoginFormPageModule {}
