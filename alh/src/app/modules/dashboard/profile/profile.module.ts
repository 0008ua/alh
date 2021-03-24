import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { UpdateActivationComponent } from './update-activation/update-activation.component';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    DirectivesModule,
  ],
  declarations: [
    ProfilePage,
    UpdateEmailComponent,
    UpdateActivationComponent,
  ],
})
export class ProfilePageModule {}
