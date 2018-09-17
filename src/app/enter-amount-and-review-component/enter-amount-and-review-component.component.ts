import { Component, OnInit, Input } from '@angular/core';
import { MockFromAccountsModel } from '../models/mock-from-accounts-model';

import {SharedAppServicesService} from '../services/shared-app-services.service';

@Component({
  selector: 'app-enter-amount-and-review-component',
  templateUrl: './enter-amount-and-review-component.component.html',
  styleUrls: ['./enter-amount-and-review-component.component.scss']
})
export class EnterAmountAndReviewComponentComponent implements OnInit {

  fromAccountChoices: MockFromAccountsModel[];

  @Input() enteredAmountValue: Number;

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    this.getFromAccountsInfo();
  }

  getFromAccountsInfo(): void {
    this.service.getFromAccountsOfUser()
        .subscribe(fromAccountChoices => this.fromAccountChoices = fromAccountChoices);
  }

  onSelectFromAccount(fromAccount: MockFromAccountsModel): void {
    fromAccount.isSelected = true;
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('fromAccount', fromAccount);
  }

  onInputValueChanged(): void {
    this.service.setAppModel('enteredAmount', this.enteredAmountValue);
  }

}
