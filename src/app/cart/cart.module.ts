import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from '../material.module';
import { SearchModule } from '../search/search.module';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, BillingInfoComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SearchModule,
  ],
  exports: [BillingInfoComponent]
})
export class CartModule {}
