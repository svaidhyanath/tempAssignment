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
      accountType:  'Payee',
      accountNumber:  '4545454545',
      accountName:  'Tomo Suzuki',
      nickName: 'Tomo',
      amountBal: '214.59',
      isSelected:  false,
      imageFile: '66x66_Tomo.png'
    },
    {
      accountType:  'Payee',
      accountNumber:  '9999999990',
      accountName:  'Sonia Cruz',
      nickName: 'Sonia',
      amountBal: '1234.56',
      isSelected:  false,
      imageFile: '66x66_Sonia.png'
    },
    {
      accountType:  'Payee',
      accountNumber:  '1357986420',
      accountName:  'Kiran Singh',
      nickName: 'Kiran',
      amountBal: '98.76',
      isSelected:  false,
      imageFile: '66x66_Kiran.png'
    },
    {
      accountType:  'Payee',
      accountNumber:  '1357986420',
      accountName:  'Imogen Lutz',
      nickName: 'Imogen',
      amountBal: '6264.69',
      isSelected:  false,
      imageFile: '66x66_Imogen.png'
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
    this.router.navigate(['/enter-amount']);
  }
  onPayeeImageClick(toAccount: MockToAccountsModel): void {
    toAccount.isSelected = true;
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('toAccount', toAccount);
    this.router.navigate(['/enter-amount']);
  }
  onAmountInputFocus(): void {
    this.amountInputFocussed = true;
  }
  onInputValueChanged(event: any) {
    if (event.target.value.toLowerCase() === 'ga') {
      this.showMockSearchDiv = true;
    }
  }
}
