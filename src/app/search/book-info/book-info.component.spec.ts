import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BookInfoComponent } from './book-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from 'src/app/app.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from 'src/app/store/reducers/book.reducer';
import { CollectionReducer } from 'src/app/store/reducers/collection.reducer';


describe('BookInfoComponent', () => {
  let component: BookInfoComponent;
  let fixture: ComponentFixture<BookInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfoComponent ],
      imports: [
        NoopAnimationsModule,
        MatCardModule,
        MatInputModule,
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot({ book: BookReducer, collection: CollectionReducer }),
      ],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
