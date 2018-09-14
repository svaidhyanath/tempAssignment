import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponentComponent } from './confirmation-component/confirmation-component.component';
import { FromToComponentComponent } from './from-to-component/from-to-component.component';
import { EnterAmountAndReviewComponentComponent } from './enter-amount-and-review-component/enter-amount-and-review-component.component';

// part of the new application
import { HomePageComponent } from './home-page/home-page.component';
import { PayeePageComponent } from './payee-page/payee-page.component';

//

const routes: Routes = [
  /* {path: '', component: FromToComponentComponent }, */ // old application landing page
  {path: 'enter-amount-and-review-component', component: EnterAmountAndReviewComponentComponent},
  {path: 'from-to-component', component: FromToComponentComponent},
  {path: 'confirmation-component', component: ConfirmationComponentComponent},
  // part of the new application
  {path: '', component: HomePageComponent },
  {path: 'home', component: HomePageComponent},
  {path: 'payee-list', component: PayeePageComponent}
  //
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
