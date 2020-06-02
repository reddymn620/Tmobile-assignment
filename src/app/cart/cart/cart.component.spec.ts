import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BookListComponent } from 'src/app/search/book-list/book-list.component';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from 'src/app/store/reducers/book.reducer';
import { CollectionReducer } from 'src/app/store/reducers/collection.reducer';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartComponent, BookListComponent ],
      imports: [
        MatButtonModule,
        RouterTestingModule,
        MatCardModule,
        StoreModule.forRoot({ book: BookReducer, collection: CollectionReducer })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
