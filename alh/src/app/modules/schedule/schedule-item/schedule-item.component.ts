import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/interface';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
})
export class ScheduleItemComponent implements OnInit {
  @Input() bookings: Booking[];
  @Input() date: string;
  @Input() room_id: string;

  constructor(
  private router: Router,
  ) { }

  ngOnInit() {}

  bookingInfo(booking?: Booking) {
    if (booking) {
      // discover
      this.router.navigate(['/', 'schedule', 'edit', booking._id]);
    } else {
      this.router.navigate(['/', 'schedule', 'new', this.room_id, this.date]);
    }
  }
}
