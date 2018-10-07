import { Component, OnInit } from '@angular/core';

import {SharedAppServicesService} from '../services/shared-app-services.service';

import {CURRENCY_SYMBOLS} from '../constants-folder/currencyConstants';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  applicationModel;
  todaysDateObj;
  todaysDateString;
  payeeImageBaseURL: String = '../../assets/';

  currencySymbols = CURRENCY_SYMBOLS;

  currencyIndicator: string;

  currencySymbolToShow: String;

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    this.todaysDateObj = new Date();
    this.todaysDateString = (this.todaysDateObj.getMonth() + 1)
    + '/' + this.todaysDateObj.getDate()
    + '/' + this.todaysDateObj.getFullYear();
    this.applicationModel = this.service.getAppModel();
    this.currencyIndicator =  this.applicationModel.toAccount.currencyIndicator;
    this.currencySymbolToShow = this.currencySymbols[this.currencyIndicator];
  }

}
