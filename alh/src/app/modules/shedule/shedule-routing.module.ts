import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShedulePage } from './shedule.page';

const routes: Routes = [
  {
    path: '',
    component: ShedulePage,
  },
  // children: [
  {
    path: 'new/:roomId/:date',
    loadChildren: () => import('./booking-form/booking-form.module').then((m) => m.BookingFormPageModule),
  },
  {
    path: 'edit/:bookingId',
    loadChildren: () => import('./booking-form/booking-form.module').then((m) => m.BookingFormPageModule),
  },
  {
    path: 'discover/:bookingId',
    loadChildren: () => import('./booking-details/booking-details.module').then((m) => m.BookingDetailsPageModule),
  },
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
export class ShedulePageRoutingModule { }
