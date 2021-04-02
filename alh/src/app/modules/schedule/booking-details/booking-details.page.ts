import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { switchMap } from 'rxjs/operators';
import { Booking } from 'src/app/interface';
import { ScheduleService } from '../../schedule/schedule.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.page.html',
  styleUrls: ['./booking-details.page.scss'],
})
export class BookingDetailsPage implements OnInit {
  booking: Booking;

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.route.paramMap.pipe(
        switchMap((paramMap) => this.scheduleService.getBookingById(paramMap.get('bookingId'))),
    )
        .subscribe((booking) => {
          console.log('booking', booking);
          this.booking = booking;
        });
  }
}
