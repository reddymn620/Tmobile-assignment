import { Action } from '@ngrx/store';
import { CollectionItems } from '../models/collection-item.model';

export const MY_COLLECTION = '[COLLECTION] My Collection';

export class MyCollection implements Action {
  readonly type = MY_COLLECTION;

  constructor(public payload: CollectionItems) {}
}

export type Actions = MyCollection;
