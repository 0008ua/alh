import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ActivateUser, UpdateUser } from 'src/app/store/actions/user.actions';

import { User } from '../../../interface';
import { State } from '../../../store/reducers';
import { getUser } from '../../../store/reducers/user.reducer';
import { UserService } from '../../user/user.service';
import { UpdateActivationComponent } from './update-activation/update-activation.component';
import { UpdateEmailComponent } from './update-email/update-email.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User | null = null;
  constructor(
    private store: Store<State>,
    public modalController: ModalController,
    public userService: UserService,
  ) { }

  ngOnInit() {
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

  activate() {
    this.userService.sendActivationCode(this.user._id).pipe(
        catchError((err) => throwError(err)),
        switchMap((_) => {
          return from(this.presentModal(UpdateActivationComponent));
        }))
        .subscribe((res) => {
          this.store.dispatch(new ActivateUser({
            _id: this.user._id,
            code: res.data.code,
          }));
        },
        (err) => console.log('err activate', err),
        );
  }

  async updateEmail() {
    const { data } = await this.presentModal(UpdateEmailComponent);
    if (data) {
      console.log('data', data);

      this.store.dispatch(new UpdateUser({
        _id: this.user._id,
        email: data.email,
      }));
    }
  }
}
