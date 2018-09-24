import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EnterAmountAndReviewComponentComponent } from './enter-amount-and-review-component/enter-amount-and-review-component.component';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PayeePageComponent } from './payee-page/payee-page.component';
import { ReviewComponent } from './review/review.component';
import { FromAccountListComponent } from './from-account-list/from-account-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterAmountAndReviewComponentComponent,
    ConfirmationComponentComponent,
    HomePageComponent,
    PayeePageComponent,
    ReviewComponent,
    FromAccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
