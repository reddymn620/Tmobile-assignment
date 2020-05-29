import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [MyCollectionComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SearchModule,
    CartModule,
  ],
})
export class CollectionModule {}
