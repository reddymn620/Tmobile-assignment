import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Subject, throwError } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';
import * as BookActions from './../../store/actions/book.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  loading = false;
  searchTerm = new Subject<string>();
  searchResults: any;
  errorMsg: any;

  public searchForm = new FormGroup({
    search: new FormControl('', Validators.required),
  });

  constructor(private appService: AppService, private router: Router, private store: Store<AppState>) {}

  public search() {
    this.searchTerm
      .pipe(
        map((e: any) => {
          console.log(e.target.value);
          return e.target.value;
        }),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((term) => {
          this.loading = true;
          return this.appService._searchEntries(term);
        }),
        catchError((e) => {
          console.log(e);
          this.loading = false;
          this.errorMsg = e.message;
          return throwError(e);
        })
      )
      .subscribe((v) => {
        this.loading = false;
        this.searchResults = v;
        this.store.dispatch(
          new BookActions.LoadBooks(this.searchResults)
        );
      });
  }

  ngOnInit() {
    this.search();
  }

  goToBookInfo(result) {
    this.loading = true;
    this.router.navigate(['search', result.id]);
  }

}
