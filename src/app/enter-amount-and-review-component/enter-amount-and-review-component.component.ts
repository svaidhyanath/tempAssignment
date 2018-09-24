import { Component, OnInit, Input } from '@angular/core';
import { MockFromAccountsModel } from '../models/mock-from-accounts-model';

import { SharedAppServicesService } from '../services/shared-app-services.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-amount-and-review-component',
  templateUrl: './enter-amount-and-review-component.component.html',
  styleUrls: ['./enter-amount-and-review-component.component.scss']
})
export class EnterAmountAndReviewComponentComponent implements OnInit {
  fromAccountChoices: MockFromAccountsModel[];

  @Input()
  enteredAmountValue: String;

  amountVal: String;

  applicationModel;

  payeeImageBaseURL: String = '../../assets/';

  constructor(
    private service: SharedAppServicesService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getFromAccountsInfo();
    this.applicationModel = this.service.getAppModel();
    if (typeof this.applicationModel.toAccount !== 'object') {
      this.router.navigate(['/payee-list']);
    }
  }

  getFromAccountsInfo(): void {
    this.service
      .getFromAccountsOfUser()
      .subscribe(
        fromAccountChoices => (this.fromAccountChoices = fromAccountChoices)
      );
  }

  onSelectFromAccount(fromAccount: MockFromAccountsModel): void {
    fromAccount.isSelected = true;
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('fromAccount', fromAccount);
  }

  onInputValueChanged(event: any) {
    console.log(event);
    this.amountVal = parseFloat(event).toFixed(2);
    this.service.setAppModel('enteredAmount', this.amountVal);
    return this.amountVal;
  }
}
