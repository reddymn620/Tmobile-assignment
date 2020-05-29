import { Action } from '@ngrx/store';
import { BookItems } from '../models/book-item.model';
import * as BookActions from '../actions/book.actions';
import { CartModule } from 'src/app/cart/cart.module';


const initialState = {
  BookItems: [],
  cart: [],
};

export function BookReducer(
  state = initialState,
  action: BookActions.Actions
) {
  switch (action.type) {
    case BookActions.LOAD_SUCCESS:
      return {
        ...state,
        BookItems: [...action.payload]
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
