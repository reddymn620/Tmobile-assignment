import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MyCollectionComponent } from './my-collection.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from 'src/app/store/reducers/book.reducer';
import { CollectionReducer } from 'src/app/store/reducers/collection.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from 'src/app/app.service';

describe('MyCollectionComponent', () => {
  let component: MyCollectionComponent;
  let fixture: ComponentFixture<MyCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCollectionComponent ],
      imports: [
        MatButtonModule,
        MatCardModule,
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({ book: BookReducer, collection: CollectionReducer })
      ],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
