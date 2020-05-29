import { BookItems } from './book-item.model';
import { CollectionItems } from './collection-item.model';

export interface AppState {
  readonly book: BookItems[];
  readonly collection: CollectionItems[];
  loading: boolean;
  error: Error;
}
