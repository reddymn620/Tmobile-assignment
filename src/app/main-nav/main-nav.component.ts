import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BookItems } from './../store/models/book-item.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/models/app.state';
import { CollectionItems } from '../store/models/collection-item.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  cart;
  collection: CollectionItems[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>
  ) {
    store.pipe(select('book')).subscribe((data) => {
      this.cart = data;
    });
    store.pipe(select('collection')).subscribe((data) => {
      this.collection = data;
    });
  }
}
