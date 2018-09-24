import { Component, OnInit, Input } from '@angular/core';

import { MockToAccountsModel } from '../models/mock-to-accounts-model';

import {SharedAppServicesService} from '../services/shared-app-services.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-payee-page',
  templateUrl: './payee-page.component.html',
  styleUrls: ['./payee-page.component.css']
})
export class PayeePageComponent implements OnInit {
  toAccountChoices: MockToAccountsModel[];

  mockRecentPayeeChoices: MockToAccountsModel[];
  toMockSearchAccountChoices: MockToAccountsModel[];

  payeeImageBaseURL: String = '../../assets/';
  tempFakeChoice;
  searchNameInputFocussed: Boolean;
  showMockSearchDiv: Boolean = false;

  constructor(
    private service: SharedAppServicesService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getToAccountsInfo();
    this.searchNameInputFocussed = false;
    this.mockRecentPayeeChoices = this.toAccountChoices.slice(0, 4);
    this.toMockSearchAccountChoices =  this.toAccountChoices.slice(-2);
  }
  getToAccountsInfo(): void {
    this.service
      .getToAccountsOfUser()
      .subscribe(
        toAccountChoices => (this.toAccountChoices = toAccountChoices)
      );
  }
  onSelectToAccount(toAccount: MockToAccountsModel): void {
    toAccount.isSelected = true;
    console.log(' options: ', this.toAccountChoices);
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('toAccount', toAccount);
    this.router.navigate(['/enter-amount']);
  }
  onPayeeImageClick(toAccount: MockToAccountsModel): void {
    toAccount.isSelected = true;
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('toAccount', toAccount);
    this.router.navigate(['/enter-amount']);
  }
  onSearchNameInputFocus(): void {
    this.searchNameInputFocussed = true;
  }
  onInputValueChanged(event: any) {
    if (event.target.value.toLowerCase() === 'ga') {
      this.showMockSearchDiv = true;
    }
  }
}
