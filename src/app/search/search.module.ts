import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {StarRatingModule} from 'angular-star-rating';

// import { RatingModule } from 'ng-starrating';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from '../material.module';
import { BookInfoComponent } from './book-info/book-info.component';

import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [SearchComponent, BookInfoComponent, BookListComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    // RatingModule,
    // StarRatingModule.forRoot(),
  ],
  exports: [SearchComponent, BookInfoComponent, BookListComponent],
})
export class SearchModule {}
