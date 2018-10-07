import { Component, OnInit } from '@angular/core';
import { MockFromAccountsModel } from '../models/mock-from-accounts-model';

import { SharedAppServicesService } from '../services/shared-app-services.service';

import { Router } from '@angular/router';

import {CURRENCY_SYMBOLS} from '../constants-folder/currencyConstants';

@Component({
  selector: 'app-enter-amount-and-review-component',
  templateUrl: './enter-amount-and-review-component.component.html',
  styleUrls: ['./enter-amount-and-review-component.component.scss']
})
export class EnterAmountAndReviewComponentComponent implements OnInit {

  payeeImageBaseURL: String = '../../assets/';

  initAmountToShowArr: Array<any> = [0, 0, 0];

  finalAmountToShowArr: Array<any>;

  currencySymbols = CURRENCY_SYMBOLS;

  currencyIndicator: string;

  currencySymbolToShow: String;

  applicationModel;

  enteredAmountValue: String;

  keypadClickedNumbersArray: Array<Number> = [];

  constructor(
    private service: SharedAppServicesService,
    private router: Router
    ) {}

  ngOnInit() {
    this.applicationModel = this.service.getAppModel();
    if (typeof this.applicationModel.toAccount !== 'object') {
      this.router.navigate(['/payee-list']);
    }
    this.currencyIndicator =  this.applicationModel.toAccount.currencyIndicator;
    this.currencySymbolToShow = this.currencySymbols[this.currencyIndicator];
    this.enteredAmountValue = this.buildAmountValueToShow(this.initAmountToShowArr, this.keypadClickedNumbersArray);

  }

  onNumpadKeyClick(keyClicked: String) {
    if ( keyClicked === 'b' ) {
      this.keypadClickedNumbersArray.pop();
    } else {
      if (keyClicked === '.') {
        this.keypadClickedNumbersArray.push(0, 0);
      } else {
        this.keypadClickedNumbersArray.push(Number(keyClicked));
      }
    }
    this.enteredAmountValue = this.buildAmountValueToShow(this.initAmountToShowArr, this.keypadClickedNumbersArray);
  }

  buildAmountValueToShow(arrToWorkWith: Array<any>, enteredNumbersArray: Array<any>) {
    if ( enteredNumbersArray.length < 4 ) {
      this.finalAmountToShowArr = arrToWorkWith.concat(enteredNumbersArray).slice(enteredNumbersArray.length);
    } else {
      this.finalAmountToShowArr = [].concat(enteredNumbersArray);
    }
    this.finalAmountToShowArr.splice(this.finalAmountToShowArr.length - 2, 0, '.');
    return this.finalAmountToShowArr.join('');
  }

  onNextBtnClick() {
    this.service.setAppModel('enteredAmount', this.enteredAmountValue);
    this.router.navigate(['/from-account']);
  }
}
