import { Component, OnInit } from '@angular/core';

import { MockUserObject } from '../models/mock-user-object';

import {SharedAppServicesService} from '../services/shared-app-services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user: MockUserObject;

  constructor(private service: SharedAppServicesService) { }

  ngOnInit() {
    this.getUserDetail();
  }
  getUserDetail(): void {
    this.service.getUserDetails()
        .subscribe(user => this.user = user);
  }

}
