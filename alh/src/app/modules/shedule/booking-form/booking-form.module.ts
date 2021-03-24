import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingFormPageRoutingModule } from './booking-form-routing.module';

import { BookingFormPage } from './booking-form.page';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    BookingFormPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    DirectivesModule,
  ],
  declarations: [BookingFormPage],
})
export class BookingFormPageModule {}
