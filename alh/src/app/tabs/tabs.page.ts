import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../interface';
import { State } from '../store/reducers';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  user: User | null = null;
  lang: string;

  constructor(
    private store: Store<State>,
    // private translate: TranslateService,

  ) { }

  ngOnInit() {
    this.store.select('user')
        .subscribe((storeState) => {
          this.user = storeState.user;
          // this.lang = storeState.lang;
          // console.log('this.lang', this.lang);
        });
  }
}
