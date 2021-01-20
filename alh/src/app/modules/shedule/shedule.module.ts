import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShedulePageRoutingModule } from './shedule-routing.module';

import { ShedulePage } from './shedule.page';
import { SheduleItemComponent } from './shedule-item/shedule-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShedulePageRoutingModule,
  ],
  declarations: [
    ShedulePage,
    SheduleItemComponent,
  ],
})
export class ShedulePageModule { }
