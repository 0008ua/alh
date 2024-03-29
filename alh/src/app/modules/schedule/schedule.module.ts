import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePageRoutingModule } from './schedule-routing.module';

import { SchedulePage } from './schedule.page';
import { ScheduleItemComponent } from './schedule-item/schedule-item.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  declarations: [
    SchedulePage,
    ScheduleItemComponent,
  ],
})
export class SchedulePageModule { }
