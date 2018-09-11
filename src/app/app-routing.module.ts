import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
import { FromToComponentComponent } from './from-to-component/from-to-component.component';
import { EnterAmountAndReviewComponentComponent } from './enter-amount-and-review-component/enter-amount-and-review-component.component';

const routes: Routes = [
  {path: '', component: FromToComponentComponent },
  {path: 'enter-amount-and-review-component', component: EnterAmountAndReviewComponentComponent},
  {path: 'from-to-component', component: FromToComponentComponent},
  {path: 'confirmation-component', component: ConfirmationComponentComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
