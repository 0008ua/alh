import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
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
  // paneEnabled = false;
  lang: string;

  constructor(
    private store: Store<State>,
    private menuController: MenuController,
    public translate: TranslateService,
  ) { }

  ngOnInit() {
    this.store.select(getUser)
        .subscribe((user) => {
          this.user = user;
        });

    this.lang = this.translate.currentLang;
  }
  ionViewWillEnter() {
    // this.paneEnabled = true;
    this.menuController.enable(true, 'dashboard-menu');
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }

  ionViewWillLeave() {
    // this.paneEnabled = false;
  }

  switchLanguage() {
    this.lang === 'en' ? this.lang = 'uk' : this.lang = 'en';
    this.translate.use(this.lang);
  }
}
