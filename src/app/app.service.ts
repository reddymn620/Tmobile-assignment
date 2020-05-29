import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  public baseURL = 'https://www.googleapis.com/books/v1/volumes/';
  public searchResults: any;
  private sendCartData = new BehaviorSubject(' ');
  public shareCartData = this.sendCartData.asObservable();

  constructor(private http: HttpClient) {}

  sendCartDataInfo(bookInfo) {
    this.sendCartData.next(bookInfo);
  }

  // HTTP call to the API
  searchEntries(term): Observable<any> {
    if (term === '') {
      console.log('Not Defined');
      return of(null);
    } else {
      const params = { q: term };
      return this.http.get(this.baseURL, { params }).pipe(
        map((response) => {
          console.log(response);
          return (this.searchResults = response['items']);
        })
      );
    }
  }

  _searchEntries(term) {
    return this.searchEntries(term);
  }

  getBookInfo(id): Observable<any> {
    return this.http.get(this.baseURL + id);
  }
}
