import { Component, OnInit, Input } from '@angular/core';

/* import { MockUserObject } from '../models/mock-user-object'; */
import { MockToAccountsModel } from '../models/mock-to-accounts-model';

import {SharedAppServicesService} from '../services/shared-app-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payee-page',
  templateUrl: './payee-page.component.html',
  styleUrls: ['./payee-page.component.css']
})
export class PayeePageComponent implements OnInit {

  /* user: MockUserObject; */
  toAccountChoices: MockToAccountsModel[];
  tempFakeChoice;

  constructor(
    private service: SharedAppServicesService,
    private router: Router
    ) { }

  ngOnInit() {
   /*  this.getUserDetail(); */
    this.getToAccountsInfo();
    console.log('on ngInit, getAppModel returns: ', this.service.getAppModel());
  }
 /*  getUserDetail(): void {
    this.service.getUserDetails()
        .subscribe(user => this.user = user);
  } */
  getToAccountsInfo(): void {
    this.service.getToAccountsOfUser()
        .subscribe(toAccountChoices => this.toAccountChoices = toAccountChoices);
  }
  onSelectToAccount(toAccount: MockToAccountsModel): void {
    toAccount.isSelected = true;
    // set the isSelected attribute on other choices as false
    this.service.setAppModel('toAccount', toAccount);
    console.log('onSelectToAccount , getAppModel returns: ', this.service.getAppModel());
    this.router.navigate(['/from-amount']);
  }
  onPayeeImageClick(): void {
    this.tempFakeChoice = this.toAccountChoices[1];
    this.tempFakeChoice.isSelected = true;
    this.service.setAppModel('toAccount', this.tempFakeChoice);
    this.router.navigate(['/from-amount']);
  }
}
