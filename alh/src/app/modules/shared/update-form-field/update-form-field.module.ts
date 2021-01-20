import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFormFieldComponent } from './update-form-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [UpdateFormFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ],
})
export class UpdateFormFieldModule { }
