import { Component, OnInit } from '@angular/core';

import { MockUserObject } from '../models/mock-user-object';
import { MockFromAccountsModel } from '../models/mock-from-accounts-model';
import { MockToAccountsModel } from '../models/mock-to-accounts-model';

import {SharedAppServicesService} from '../services/shared-app-services.service';

@Component({
  selector: 'app-from-to-component',
  templateUrl: './from-to-component.component.html',
  styleUrls: ['./from-to-component.component.css']
})
export class FromToComponentComponent implements OnInit {

  user: MockUserObject;
  fromAccountChoices: MockFromAccountsModel[];
  toAccountChoices: MockToAccountsModel[];

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
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

}
