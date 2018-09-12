import { Component, OnInit } from '@angular/core';

import { MockUserObject } from '../models/mock-user-object';
import { MockFromAccountsModel } from '../models/mock-from-accounts-model';
import { MockToAccountsModel } from '../models/mock-to-accounts-model';

import {SharedAppServicesService} from '../services/shared-app-services.service';

@Component({
  selector: 'app-from-to-component',
  templateUrl: './from-to-component.component.html',
  styleUrls: ['./from-to-component.component.scss']
})
export class FromToComponentComponent implements OnInit {

  user: MockUserObject;
  fromAccountChoices: MockFromAccountsModel[];
  toAccountChoices: MockToAccountsModel[];

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    this.service.setAppModel('enteredAmount', 0);
    this.getUserDetail();
    this.getFromAccountsInfo();
    this.getToAccountsInfo();
  }

  getUserDetail(): void {
    this.service.getUserDetails()
        .subscribe(user => this.user = user);
  }

  getFromAccountsInfo(): void {
    this.service.getFromAccountsOfUser()
        .subscribe(fromAccountChoices => this.fromAccountChoices = fromAccountChoices);
  }

  getToAccountsInfo(): void {
    this.service.getToAccountsOfUser()
        .subscribe(toAccountChoices => this.toAccountChoices = toAccountChoices);
  }

  onSelectFromAccount(fromAccount: MockFromAccountsModel): void {
    this.service.setAppModel('fromAccount', fromAccount);
  }

  onSelectToAccount(toAccount: MockToAccountsModel): void {
    this.service.setAppModel('toAccount', toAccount);
  }

  buttonClicked(): void {
    console.log('Getting the saved appModel: ', this.service.getAppModel());
  }

}
