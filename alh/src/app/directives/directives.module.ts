import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionDirective } from './permission.directive';
import { PermissionDisabledDirective } from './permission-disabled.directive';


@NgModule({
  declarations: [
    PermissionDirective,
    PermissionDisabledDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PermissionDirective,
    PermissionDisabledDirective,
  ],
})
export class DirectivesModule { }
