import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFormFieldComponent } from './update-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [UpdateFormFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild({
      extend: true,
    }),
    PipesModule,
  ],
})
export class UpdateFormFieldModule { }
