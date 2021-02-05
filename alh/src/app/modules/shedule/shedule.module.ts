import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShedulePageRoutingModule } from './shedule-routing.module';

import { ShedulePage } from './shedule.page';
import { SheduleItemComponent } from './shedule-item/shedule-item.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShedulePageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  declarations: [
    ShedulePage,
    SheduleItemComponent,
  ],
})
export class ShedulePageModule { }
