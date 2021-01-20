import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { User } from '../interface';
import { State } from '../store/reducers';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user: User | null = null;

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.select('user')
        .subscribe((storeState) => {
          this.user = storeState.user;
        });
  }
}
