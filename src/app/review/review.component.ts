import { Component, OnInit } from '@angular/core';

import {SharedAppServicesService} from '../services/shared-app-services.service';

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

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    this.todaysDateObj = new Date();
    this.todaysDateString = (this.todaysDateObj.getMonth() + 1)
    + '/' + this.todaysDateObj.getDate()
    + '/' + this.todaysDateObj.getFullYear();
    this.applicationModel = this.service.getAppModel();
  }

}
