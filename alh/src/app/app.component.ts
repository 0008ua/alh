import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './modules/user/user.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { State } from './store/reducers';
import { GetUser, Logout } from './store/actions/user.actions';
import { User } from './interface';
import { getUser } from './store/reducers/user.reducer';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: User;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private router: Router,
    private store: Store<State>,

  ) {
    this.initializeApp();
  }

  ngOnInit() {
    /* Test -- Refresh token */
    /*     this.userService.protected()
        .subscribe(
            (protectedResult) => console.log('protectedResult', protectedResult),
            (err) => console.log('protectedError', err),
        ); */

    this.store.dispatch(new GetUser());
    this.store.select(getUser)
        .subscribe((user) => {
          this.user = user;
        });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLogout() {
    this.store.dispatch(new Logout());

    // this.userService.logout()
    //     .subscribe(
    //         (_) => console.log('logout', _),
    //         (err) => console.log('logout Error', err),
    //     );
  }
}
