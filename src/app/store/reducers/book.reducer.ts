import { Action } from '@ngrx/store';
import { BookItems } from '../models/book-item.model';
import * as BookActions from '../actions/book.actions';

const initialState = {
  searchString: [],
  searchResults: [],
  cart: [],
};

export function BookReducer(
  state = initialState,
  action: BookActions.Actions
) {
  switch (action.type) {

    case BookActions.SEARCH_STRING:
      return {
        ...state,
        searchString: [...state.searchString, action.payload]
      };

    case BookActions.LOAD_SUCCESS:
      return {
        ...state,
        searchResults: [...action.payload]
      };

    case BookActions.LOAD_BOOKS:
      return {
        ...state
      };

    case BookActions.ADD_BOOK:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case BookActions.REMOVE_BOOK:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
       };

    default:
      return state;
  }
}
