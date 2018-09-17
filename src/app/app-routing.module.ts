import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
import { EnterAmountAndReviewComponentComponent } from './enter-amount-and-review-component/enter-amount-and-review-component.component';

import { HomePageComponent } from './home-page/home-page.component';
import { PayeePageComponent } from './payee-page/payee-page.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'home', component: HomePageComponent},
  {path: 'payee-list', component: PayeePageComponent},
  {path: 'from-amount', component: EnterAmountAndReviewComponentComponent},
  {path: 'confirmation', component: ConfirmationComponentComponent},
  {path: 'review', component: ReviewComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
