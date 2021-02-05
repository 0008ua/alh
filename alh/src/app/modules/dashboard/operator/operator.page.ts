import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Company, OperatorFormFields, User } from '../../../interface';
import { State } from '../../../store/reducers';
import { getCompany, getUser } from '../../../store/reducers/user.reducer';
import { UpdateFormFieldComponent } from '../../shared/update-form-field/update-form-field.component';
import { OperatorAddComponent } from './operator-add/operator-add.component';
import { OperatorService } from './operator.service';


@Component({
  selector: 'app-operator',
  templateUrl: './operator.page.html',
  styleUrls: ['./operator.page.scss'],
})
export class OperatorPage implements OnInit {
  entities$: Observable<User[]> | Store<User[]>;
  loading$: Observable<boolean> | Store<boolean>
  user: User | null = null;
  company: Company | null = null;
  operators: User[];
  cookie: any;

  constructor(
    private operatorService: OperatorService,
    private store: Store<State>,
    public modalController: ModalController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.store.select(getCompany)
        .subscribe((company) => {
          if (company) {
            this.company = company;
            this.operatorService.getAll();
          }
        });

    this.store.select(getUser)
        .subscribe((user) => {
          if (user) {
            this.user = user;
          }
        });

    this.entities$ = this.operatorService.entities$;
    this.loading$ = this.operatorService.loading$;

    this.entities$.subscribe((operators) => this.operators = operators);
  }

  async presentAlert(_id: string, login: string) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Delete',
      subHeader: 'user with login: ' + login,
      message: 'Are you shure?',
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

  blockUser(_id: string, blocked: boolean) {
    this.operatorService.update({
      _id,
      blocked,
    }).subscribe(
        (result) => console.log('update result', result),
        (err) => console.log('update error', err));
  }

  // async update(_id: string, field: OperatorFormFields) {
  //   const { data } = await this.presentModal(UpdateFormFieldComponent, { data: this.operatorService.formFieldOptions(field) });
  //   if (data) {
  //     this.operatorService.update({
  //       _id,
  //       [field]: data,
  //     }).subscribe(
  //         (result) => console.log('update result', result),
  //         (err) => console.log('update error', err),
  //     );
  //   }
  // }

  async add() {
    const { data } = await this.presentModal(OperatorAddComponent, { company: this.company });
    if (data) {
      this.operatorService.add(data).subscribe(
          (result) => console.log('add result', result),
          (err) => console.log('add error', err),
      );
    }
  }

  remove(_id: string) {
    return this.operatorService.delete(_id);
  }
}
