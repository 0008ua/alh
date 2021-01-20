import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { Booking } from 'src/app/interface';
import { SheduleService } from '../../shedule/shedule.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {
  booking: Booking;

  constructor(
    private route: ActivatedRoute,
    private sheduleService: SheduleService,
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.route.paramMap.pipe(
        switchMap((paramMap) => this.sheduleService.getBookingById(paramMap.get('bookingId'))),
    )
        .subscribe((booking) => {
          console.log('booking', booking);
          this.booking = booking;
        });
  }
}
