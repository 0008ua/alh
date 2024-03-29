import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from '../../directives/directives.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    TranslateModule.forChild({
      extend: true,
    }),
    DirectivesModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
