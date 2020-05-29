import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookActions from '../actions/book.actions';

import { AppService } from 'src/app/app.service';
import { BookItems } from './../models/book-item.model';

@Injectable()
export class BookEffects {
  constructor(private actions: Actions, private appService: AppService) {}

  @Effect()
  loadBooks$ = this.actions.pipe(
    ofType(BookActions.LOAD_BOOKS),
    mergeMap( action =>
      this.appService._searchEntries(action).pipe(
        map((data: BookItems[]) => {
           return { type: BookActions.LOAD_SUCCESS, payload: data };
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
