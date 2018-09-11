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

  constructor() { }

  getUserDetails(): Observable<MockUserObject> {
    console.log('Get User Service response: ', MOCK_SAMPLE_USER);
    return of(MOCK_SAMPLE_USER);
  }

  getFromAccountsOfUser(): Observable<MockFromAccountsModel[]> {
    console.log('Get From Accounts Service response: ', MOCK_FROM_ACCOUNTS_ARRAY);
    return of(MOCK_FROM_ACCOUNTS_ARRAY);
  }

  getToAccountsOfUser(): Observable<MockToAccountsModel[]> {
    console.log('Get To Accounts Service response: ', MOCK_TO_ACCOUNTS_ARRAY);
    return of(MOCK_TO_ACCOUNTS_ARRAY);
  }

}
