import { Component, OnInit, Input, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';
import * as BookActions from './../../store/actions/book.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  show = true;
  display = false;
  books;
  cart;

  constructor(private store: Store<AppState>, private router: Router) {
    store.select('book').subscribe(data => {
      this.books = data;
    });
    store.pipe(select('book')).subscribe((data) => {
      this.cart = data;
    });
  }

  deleteBook(id) {
    this.store.dispatch(new BookActions.RemoveBook(id));
  }

  purchaseBtnClick(result) {
    this.router.navigate(['cart', result.id]);
  }
}
