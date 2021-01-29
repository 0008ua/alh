import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/interface';
import { Logout } from 'src/app/store/actions/user.actions';
import { State } from 'src/app/store/reducers';
import { getUser } from 'src/app/store/reducers/user.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: User;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.select(getUser)
        .subscribe((user) => {
          this.user = user;
        });
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }
}
