import { Component, OnInit, Renderer2 } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './modules/user/user.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { State } from './store/reducers';
import { GetUser, LoadLang, Logout } from './store/actions/user.actions';
import { User } from './interface';
import { getLang, getUser } from './store/reducers/user.reducer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: User;
  lang: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private router: Router,
    private store: Store<State>,
    private renderer: Renderer2,
    private translate: TranslateService,

  ) {
    this.initializeApp();
    // static translation initialization
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // this.lang = 'en';
    // for automatic lang detection
    const browserLang = translate.getBrowserLang();
    console.log('browserLang', browserLang);
    this.lang = browserLang.match(/uk|ru/) ? 'uk' : 'en';
    translate.use(this.lang);

    // set to store static translation language
    this.store.dispatch(new LoadLang());
  }

  ngOnInit() {
    /* Test -- Refresh token */
    /*     this.userService.protected()
        .subscribe(
            (protectedResult) => console.log('protectedResult', protectedResult),
            (err) => console.log('protectedError', err),
        ); */

    // Manualy set light theme mode
    this.renderer.setAttribute(document.body, 'color-theme', 'light');

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
}
