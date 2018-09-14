import { Component, OnInit } from '@angular/core';

import {SharedAppServicesService} from '../services/shared-app-services.service';

@Component({
  selector: 'app-confirmation-component',
  templateUrl: './confirmation-component.component.html',
  styleUrls: ['./confirmation-component.component.scss']
})
export class ConfirmationComponentComponent implements OnInit {

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    console.log('on ngInit, getAppModel returns: ', this.service.getAppModel());
  }

}
