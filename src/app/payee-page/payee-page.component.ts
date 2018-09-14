import { Component, OnInit, Input } from '@angular/core';

import { MockUserObject } from '../models/mock-user-object';
import { MockFromAccountsModel } from '../models/mock-from-accounts-model';
import { MockToAccountsModel } from '../models/mock-to-accounts-model';

import {SharedAppServicesService} from '../services/shared-app-services.service';

@Component({
  selector: 'app-payee-page',
  templateUrl: './payee-page.component.html',
  styleUrls: ['./payee-page.component.css']
})
export class PayeePageComponent implements OnInit {

  user: MockUserObject;
  fromAccountChoices: MockFromAccountsModel[];
  toAccountChoices: MockToAccountsModel[];
  @Input() enteredAmountValue: Number;
  allInputsAnswered: Boolean;

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    this.service.setAppModel('enteredAmount', 0);
    this.allInputsAnswered = true;
    this.getUserDetail();
    this.getFromAccountsInfo();
    this.getToAccountsInfo();
    console.log(this.service.getAppModel());
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
    fromAccount.isSelected = true;
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('fromAccount', fromAccount);
  }
  onSelectToAccount(toAccount: MockToAccountsModel): void {
    toAccount.isSelected = true;
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('toAccount', toAccount);
  }
  onInputValueChanged(): void {
    this.service.setAppModel('enteredAmount', this.enteredAmountValue);
  }
  buttonClicked(): void {
    console.log('Getting the saved appModel: ', this.service.getAppModel());
  }

}
