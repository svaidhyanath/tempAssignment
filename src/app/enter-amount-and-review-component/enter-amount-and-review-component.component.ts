import { Component, OnInit } from '@angular/core';

import { MockUserObject } from '../models/mock-user-object';

import {SharedAppServicesService} from '../services/shared-app-services.service';

@Component({
  selector: 'app-enter-amount-and-review-component',
  templateUrl: './enter-amount-and-review-component.component.html',
  styleUrls: ['./enter-amount-and-review-component.component.scss']
})
export class EnterAmountAndReviewComponentComponent implements OnInit {

  user: MockUserObject;
  appModel: Object;

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    this.getUserDetail();
    // service.getAppModel();
  }

  /* getAppModel(): void {
    this.service.getAppModel()
        .subscribe(appModel => this.appModel = this.appModel);
  } */

  getUserDetail(): void {
    this.service.getUserDetails()
        .subscribe(user => this.user = user);
  }

}
