import { Component, OnInit } from '@angular/core';

import {SharedAppServicesService} from '../services/shared-app-services.service';

import {CURRENCY_SYMBOLS} from '../constants-folder/currencyConstants';

@Component({
  selector: 'app-confirmation-component',
  templateUrl: './confirmation-component.component.html',
  styleUrls: ['./confirmation-component.component.scss']
})
export class ConfirmationComponentComponent implements OnInit {

  applicationModel;

  currencySymbols = CURRENCY_SYMBOLS;

  currencyIndicator: string;

  currencySymbolToShow: String;

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    console.log('on ngInit @ confirmation --, getAppModel returns: ', this.service.getAppModel());
    this.applicationModel = this.service.getAppModel();
    this.currencyIndicator =  this.applicationModel.toAccount.currencyIndicator;
    this.currencySymbolToShow = this.currencySymbols[this.currencyIndicator];
  }

}
