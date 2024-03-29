import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthBlockedGuard } from '../user/auth-blocked.guard';

import { SchedulePage } from './schedule.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage,
  },
  // children: [
  {
    path: 'new/:roomId/:date',
    loadChildren: () => import('./booking-form/booking-form.module').then((m) => m.BookingFormPageModule),
    canLoad: [AuthBlockedGuard],
    canActivate: [AuthBlockedGuard],
  },
  {
    path: 'edit/:bookingId',
    loadChildren: () => import('./booking-form/booking-form.module').then((m) => m.BookingFormPageModule),
  },
  // {
  //   path: 'discover/:bookingId',
  //   loadChildren: () => import('./booking-details/booking-details.module').then((m) => m.BookingDetailsPageModule),
  // },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
  //   ],
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulePageRoutingModule { }
