import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FromToComponentComponent } from './from-to-component/from-to-component.component';
import { EnterAmountAndReviewComponentComponent } from './enter-amount-and-review-component/enter-amount-and-review-component.component';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FromToComponentComponent,
    EnterAmountAndReviewComponentComponent,
    ConfirmationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
