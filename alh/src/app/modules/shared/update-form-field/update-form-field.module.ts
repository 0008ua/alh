import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFormFieldComponent } from './update-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [UpdateFormFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
})
export class UpdateFormFieldModule { }
