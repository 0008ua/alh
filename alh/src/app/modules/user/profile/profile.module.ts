import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { UpdateActivationComponent } from './update-activation/update-activation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProfilePageRoutingModule,
  ],
  declarations: [
    ProfilePage,
    UpdateEmailComponent,
    UpdateActivationComponent,
  ],
})
export class ProfilePageModule {}
