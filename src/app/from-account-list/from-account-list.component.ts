import { Component, OnInit } from '@angular/core';
import { MockFromAccountsModel } from '../models/mock-from-accounts-model';

import { SharedAppServicesService } from '../services/shared-app-services.service';


@Component({
  selector: 'app-from-account-list',
  templateUrl: './from-account-list.component.html',
  styleUrls: ['./from-account-list.component.css']
})
export class FromAccountListComponent implements OnInit {

  fromAccountChoices: MockFromAccountsModel[];

  applicationModel;

  payeeImageBaseURL: String = '../../assets/';

  constructor(private service: SharedAppServicesService) {}

  ngOnInit() {
    this.getFromAccountsInfo();
    this.applicationModel = this.service.getAppModel();
    console.log('from-account nginit: ', this.service.getAppModel());
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

}
