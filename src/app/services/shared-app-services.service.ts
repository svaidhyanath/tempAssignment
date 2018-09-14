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

  private MOCK_TO_ACCOUNTS_RESPONSE_FROM_API = {
    'cfiToken': null,
    'flowId': null,
    'nextAllowedStates': null,
    'type': 'success',
    'code': '0000',
    'details': '',
    'location': '',
    'moreInfo': '',
    'message': null,
    'prefix': null,
    'cgtPayeeList': {
       'index': '0',
       'isGlobalMobileV3App': 'N',
       'payeeList': [
          {
             'canPayNowFlag': 'Y',
             'citiAccountListId': '1',
             'citiAccountName': ',man,numb,no',
             'citiAccountNickName': ',man,numb,no',
             'payeeStatus': 'ACTIVE',
             'canEditFlag': 'Y',
             'canDeleteFlag': 'Y',
             'canActivateFlag': 'N',
             'payees': [
                5
             ],
             'domesticRefId': null,
             'internationalRefId': null,
             'billPayRefId': null,
             'domesticNickName': null,
             'internationalNickName': null,
             'billPayNickName': null,
             'p2pRefId': null,
             'payeeRefId': ',man,numb,no',
             'lastPaymentAmount': '$10.00',
             'lastPaymentDate': '09-08-2018',
             'lastPayment': '$10.00 on 09-08-2018',
             'lastPaymentAmountDesc': 'Last Payment Amount : ',
             'lastPaymentDateDesc': 'Last Payment Date : ',
             'lastPaymentDesc': 'Last Payment: ',
             'p2pGtpsNickName': null,
             'elecPayeeFullName': 'EMERGE MASTERCARD/VISA',
             'showLastPaymentDetails': true,
             'textIdentifier': 'BP',
             'unified': false
          }
       ],
       'payeeListCount': '1',
       'p2pUpdate': null,
       'token': '1',
       'p2PUpdateRequired': false
    },
    'makePayment': true,
    'cgtdomesticOn': true,
    'cgtinternationalOn': true,
    'addEditPayeeOn': true
  };

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
