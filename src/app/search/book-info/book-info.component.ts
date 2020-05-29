import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';
import * as BookActions from './../../store/actions/book.actions';
import { Subscription } from 'rxjs';
import { BookDetails } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit, OnDestroy {
  public bookId;
  public bookInfo;
  getBookId: Subscription;
  getBookInfo: Subscription;

  constructor(
    private appService: AppService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    console.log('bookInfo =', this.bookInfo);
    this.getBookId = this.actRoute.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
      console.log('bookId', this.bookId);
    });

    this.getBookInfo = this.appService
      .getBookInfo(this.bookId)
      .subscribe((data) => {
        console.log('bookIdVal =', data);
        this.bookInfo = data;
        console.log('averageRating =', data.volumeInfo.averageRating);
      });
  }

  addToCart(bookInfo) {
    this.store.dispatch(new BookActions.AddBook(bookInfo));
    this.router.navigate(['cart']);
  }

  addToBookInfo(result) {
    this.router.navigate(['cart', result.id]);
  }

  ngOnDestroy() {
    this.getBookId.unsubscribe();
    this.getBookInfo.unsubscribe();
  }
}
