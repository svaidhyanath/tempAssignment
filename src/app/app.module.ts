import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
//
import { FromToComponentComponent } from './from-to-component/from-to-component.component';
import { EnterAmountAndReviewComponentComponent } from './enter-amount-and-review-component/enter-amount-and-review-component.component';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
//
import { HomePageComponent } from './home-page/home-page.component';
import { PayeePageComponent } from './payee-page/payee-page.component';

@NgModule({
  declarations: [
    AppComponent,
    //
    FromToComponentComponent,
    EnterAmountAndReviewComponentComponent,
    ConfirmationComponentComponent,
    //
    HomePageComponent,
    PayeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
