import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, startWith, switchMap, take, tap } from 'rxjs/operators';

import { Company } from 'src/app/interface';
import { UserService } from 'src/app/modules/user/user.service';
import { State } from '../../../../store/reducers';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.scss'],
})
export class RoomAddComponent implements OnInit {
  @Input() company: Company;
  addRoomForm: FormGroup;
  @ViewChild('addRoomFormDirective', { static: false }) addRoomFormDirective: FormGroupDirective;
  loading$: Observable<boolean> | Store<boolean>
  loadingIndicator: any;

  constructor(
    public modalController: ModalController,
    private userService: UserService,
    private store: Store<State>,
    private roomService: RoomService,
  ) { }

  ngOnInit() {
    this.loading$ = this.roomService.loading$;

    this.addRoomForm = new FormGroup({
      name: new FormControl(
          this.roomService.formFieldOptions('name').formControl.formState,
          this.roomService.formFieldOptions('name').formControl.validatorOrOpts,
          this.roomService.formFieldOptions('name').formControl.asyncValidator),
      price: new FormControl(
          this.roomService.formFieldOptions('price').formControl.formState,
          this.roomService.formFieldOptions('price').formControl.validatorOrOpts,
          this.roomService.formFieldOptions('price').formControl.asyncValidator),
    });
  }

  dismiss(data?: any): void {
    this.modalController.dismiss(data);
  }

  onSignup() {
    this.dismiss({
      name: this.addRoomForm.get('name').value,
      price: this.addRoomForm.get('price').value,
    });
    this.resetForm();
  }

  resetForm() {
    if (this.addRoomFormDirective) {
      this.addRoomFormDirective.resetForm();
    }
  }
}
