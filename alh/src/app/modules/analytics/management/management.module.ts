import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagementPageRoutingModule } from './management-routing.module';

import { ManagementPage } from './management.page';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ManagementPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    DirectivesModule,
  ],
  declarations: [ManagementPage],
})
export class ManagementPageModule {}
