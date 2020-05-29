import * as MyCollectionActions from '../actions/collection.actions';
import { CollectionItems } from '../models/collection-item.model';

const initialState = [];

export function CollectionReducer(
  state: CollectionItems[] = initialState,
  action: MyCollectionActions.Actions
) {
  switch (action.type) {
    case MyCollectionActions.MY_COLLECTION:
      return [...state, action.payload];
    default:
      return state;
  }
}
