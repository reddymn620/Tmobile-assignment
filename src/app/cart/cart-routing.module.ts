import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
  {
    path: ':id',
    component: BillingInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
