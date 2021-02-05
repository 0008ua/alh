import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Company, Room, RoomFormFields, User } from 'src/app/interface';
import { State } from 'src/app/store/reducers';
import { RoomService } from './room.service';
import { getCompany, getUser } from '../../../store/reducers/user.reducer';
import { AlertController, ModalController } from '@ionic/angular';
import { RoomAddComponent } from './room-add/room-add.component';
import { Observable } from 'rxjs';
import { UpdateFormFieldComponent } from '../../shared/update-form-field/update-form-field.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  user: User | null = null;
  company: Company | null = null;
  rooms: Room[];
  loading$: Observable<boolean> | Store<boolean>

  constructor(
    private roomService: RoomService,
    private store: Store<State>,
    public modalController: ModalController,
    public alertController: AlertController,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.store.select(getCompany)
        .subscribe((company) => {
          if (company) {
            this.company = company;
            this.roomService.getAll();
          }
        });

    this.store.select(getUser)
        .subscribe((user) => {
          if (user) {
            this.user = user;
          }
        });

    this.loading$ = this.roomService.loading$;
    this.roomService.entities$
        .subscribe((rooms) => this.rooms = rooms);
  }

  async presentAlert(_id: string, name: string) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: this.translate.instant('elements.button.delete'),
      subHeader: this.translate.instant('dif.room') + ': ' + name,
      message: this.translate.instant('dif.sure'),
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        // cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        },
      }, {
        text: 'Okay',
        handler: () => this.remove(_id),
      }],
    });
    await alert.present();
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

  async update(_id: string, field: RoomFormFields) {
    const { data } = await this.presentModal(UpdateFormFieldComponent, { data: this.roomService.formFieldOptions(field)});
    if (data) {
      this.roomService.update({
        _id,
        [field]: data,
      }).subscribe(
          (result) => console.log('update result', result),
          (err) => console.log('update error', err),
      );
    }
  }

  async add() {
    const { data } = await this.presentModal(RoomAddComponent, { company: this.company });
    if (data) {
      this.roomService.add(data).subscribe(
          (result) => console.log('add result', result),
          (err) => console.log('add error', err),
      );
    }
  }

  remove(_id: string) {
    return this.roomService.delete(_id);
  }
}
