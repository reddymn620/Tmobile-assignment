import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { BookListComponent } from '../book-list/book-list.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from 'src/app/store/reducers/book.reducer';
import { CollectionReducer } from 'src/app/store/reducers/collection.reducer';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, BookListComponent],
      imports: [
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        MatCardModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot({ book: BookReducer, collection: CollectionReducer }),
      ],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
