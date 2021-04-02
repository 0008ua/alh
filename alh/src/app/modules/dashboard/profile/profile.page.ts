import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ActivateUser, RemoveCompany, UpdateUser } from 'src/app/store/actions/user.actions';

import { Company, User } from '../../../interface';
import { State } from '../../../store/reducers';
import { getCompany, getUser } from '../../../store/reducers/user.reducer';
import { UserService } from '../../user/user.service';
import { UpdateActivationComponent } from './update-activation/update-activation.component';
import { UpdateEmailComponent } from './update-email/update-email.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User | null = null;
  company: Company;
  environment = environment;

  constructor(
    private store: Store<State>,
    public modalController: ModalController,
    public userService: UserService,
    public alertController: AlertController,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.store.select(getCompany)
        .subscribe((company) => {
          this.company = company;
        });

    this.store.select(getUser)
        .subscribe((user) => {
          this.user = user;
        });
  }

  async presentModal(component, data?: any): Promise<any> {
    const modal = await this.modalController.create({
      component,
      // cssClass: 'my-custom-class',
      componentProps: data,
    });
    await modal.present();
    return await modal.onWillDismiss();
  }

  async presentAlert(name: string) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: this.translate.instant('elements.button.delete') + ' ' +
      this.translate.instant('modules.dashboard.profile.company') + ': ' + name,
      subHeader: this.translate.instant('modules.dashboard.profile.deleteAttention'),
      message: this.translate.instant('dif.sure'),
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        // cssClass: 'color_warning',
        handler: (_) => {
        },
      }, {
        text: 'Okay',
        handler: () => this.removeCompany(),
        cssClass: 'color_danger',
      }],
    });
    await alert.present();
  }

  removeCompany() {
    this.store.dispatch(new RemoveCompany());
  }

  activate() {
    this.userService.sendActivationCode(this.user._id).pipe(
        catchError((err) => throwError(err)),
        switchMap((_) => {
          return from(this.presentModal(UpdateActivationComponent));
        }))
        .subscribe((res) => {
          this.store.dispatch(new ActivateUser({
            _id: this.user._id,
            code: res.data?.code,
          }));
        },
        (err) => console.log('err activate', err),
        );
  }

  async updateEmail() {
    const { data } = await this.presentModal(UpdateEmailComponent);
    if (data) {
      this.store.dispatch(new UpdateUser({
        _id: this.user._id,
        email: data.email,
      }));
    }
  }
}
