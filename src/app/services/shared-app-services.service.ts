import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MockUserObject } from '../models/mock-user-object';
import { MockFromAccountsModel } from '../models/mock-from-accounts-model';
import { MockToAccountsModel } from '../models/mock-to-accounts-model';

import {MOCK_SAMPLE_USER} from '../mockData/mockUser';
import {MOCK_FROM_ACCOUNTS_ARRAY} from '../mockData/fromAccountsArray';
import {MOCK_TO_ACCOUNTS_ARRAY} from '../mockData/toAccountsArray';


@Injectable({
  providedIn: 'root'
})
export class SharedAppServicesService {

  appModel = {
    user : MockUserObject,
    fromAccount : MockFromAccountsModel,
    toAccount : MockToAccountsModel,
    enteredAmount: String
  };

  constructor() { }

  getUserDetails(): Observable<MockUserObject> {
    this.setAppModel('user', MOCK_SAMPLE_USER);
    return of(MOCK_SAMPLE_USER);
  }

  getFromAccountsOfUser(): Observable<MockFromAccountsModel[]> {
    return of(MOCK_FROM_ACCOUNTS_ARRAY);
  }

  getToAccountsOfUser(): Observable<MockToAccountsModel[]> {
    return of(MOCK_TO_ACCOUNTS_ARRAY);
  }

  setAppModel(name, value) {
    this.appModel[name] = value;
  }

  getAppModel() {
    return this.appModel;
  }

}
