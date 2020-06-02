import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { BillingInfoComponent } from './billing-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from 'src/app/app.service';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from 'src/app/store/reducers/book.reducer';
import { CollectionReducer } from 'src/app/store/reducers/collection.reducer';
import { MatDialogModule } from '@angular/material/dialog';

describe('BillingInfoComponent', () => {
  let component: BillingInfoComponent;
  let fixture: ComponentFixture<BillingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingInfoComponent ],
      imports: [
        NoopAnimationsModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatDialogModule,
        StoreModule.forRoot({ book: BookReducer, collection: CollectionReducer })
      ],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
