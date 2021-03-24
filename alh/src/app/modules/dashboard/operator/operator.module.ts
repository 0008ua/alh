import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorPageRoutingModule } from './operator-routing.module';

import { OperatorPage } from './operator.page';
import { OperatorAddComponent } from './operator-add/operator-add.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OperatorPageRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      extend: true,
    }),
    PipesModule,
  ],
  declarations: [OperatorPage, OperatorAddComponent],
})

export class OperatorPageModule {}
