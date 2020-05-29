import { Action } from '@ngrx/store';
import { BookItems } from '../models/book-item.model';

export const ADD_BOOK = '[BOOK] Add Cart';
export const REMOVE_BOOK = '[BOOK] Remove Cart';
export const LOAD_BOOKS = '[BOOK] Load Books';
export const LOAD_SUCCESS = '[BOOK] Load Success';

export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: BookItems) {}
}

export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;

  constructor(public payload: number) {}
}

export class LoadBooks implements Action {
  readonly type = LOAD_BOOKS;

  constructor(public payload: BookItems) {}
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: BookItems[]) {}
}

export type Actions = AddBook | RemoveBook | LoadBooks | LoadSuccess;
