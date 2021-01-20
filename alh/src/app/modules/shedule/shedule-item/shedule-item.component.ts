import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/interface';

@Component({
  selector: 'app-shedule-item',
  templateUrl: './shedule-item.component.html',
  styleUrls: ['./shedule-item.component.scss'],
})
export class SheduleItemComponent implements OnInit {
  @Input() bookings: Booking[];
  @Input() date: string;
  @Input() room_id: string;

  constructor(
  private router: Router,
  ) { }

  ngOnInit() {}

  bookingInfo(booking?: Booking) {
    if (booking) {
      this.router.navigate(['/', 'shedule', 'discover', booking._id]);
    } else {
      this.router.navigate(['/', 'shedule', 'new', this.room_id, this.date]);
    }
  }
}
