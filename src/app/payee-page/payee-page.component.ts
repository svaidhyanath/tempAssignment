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

  mockRecentPayeeChoices: MockToAccountsModel[] = [
    {
      accountType: 'Payee',
      accountNumber: '1357986420',
      accountName: 'Theo Riddick',
      nickName: 'Theo',
      amountBal: '33214.99',
      isSelected: false,
      imageFile: 'theo-65x65.png'
    },
    {
      accountType: 'Payee',
      accountNumber: '9999999990',
      accountName: 'Alex Jones',
      nickName: 'Alex',
      amountBal: '1234.56',
      isSelected: false,
      imageFile: 'alex-66x66.png'
    },
    {
      accountType: 'Payee',
      accountNumber: '1357986420',
      accountName: 'Bing Zhang',
      nickName: 'Bing',
      amountBal: '6264.69',
      isSelected: false,
      imageFile: 'bing-66x66.png'
    },
    {
      accountType: 'Payee',
      accountNumber: '4545454545',
      accountName: 'Shane Beiber',
      nickName: 'Shane',
      amountBal: '214.59',
      isSelected: false,
      imageFile: 'shane-66x66.png'
    }
  ];

  toMockSearchAccountChoices: MockToAccountsModel[] = [
    {
      accountType: 'Payee',
      accountNumber: '1357986420',
      accountName: 'Gavin Johnson',
      nickName: 'Gavin',
      amountBal: '1498.22',
      isSelected: false,
      imageFile: 'gavin-62x62.png'
    },
    {
      accountType: 'Payee',
      accountNumber: '1357986420',
      accountName: 'Gas Co.',
      nickName: 'Gas Co.',
      amountBal: '98.76',
      isSelected: false,
      imageFile: 'gas_co_64x63.png'
    }
  ];

  payeeImageBaseURL: String = '../../assets/';
  tempFakeChoice;
  amountInputFocussed: Boolean;
  showMockSearchDiv: Boolean = false;

  constructor(
    private service: SharedAppServicesService,
    private router: Router
    ) {}

  ngOnInit() {
    this.getToAccountsInfo();
    this.amountInputFocussed = false;
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
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('toAccount', toAccount);
    this.router.navigate(['/from-amount']);
  }
  onPayeeImageClick(toAccount: MockToAccountsModel): void {
    toAccount.isSelected = true;
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('toAccount', toAccount);
    this.router.navigate(['/from-amount']);
  }
  onAmountInputFocus(): void {
    this.amountInputFocussed = true;
  }
  onAmountInputValueChanged(event: any) {
    if (event.target.value.toLowerCase() === 'ga') {
      this.showMockSearchDiv = true;
    }
  }
}
