import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';
import * as MyCollectionActions from './../../store/actions/collection.actions';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
})
export class BillingInfoComponent implements OnInit, OnDestroy {
  public bookId;
  public bookInfo;

  bookIdSubscription: Subscription;
  bookInfoSubscription: Subscription;

  public cartForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(
    private appService: AppService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private store: Store<AppState>,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.bookIdSubscription = this.actRoute.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
    });
    this.bookInfoSubscription = this.appService.getBookInfo(this.bookId).subscribe((data) => {
      this.bookInfo = data;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogComponent, dialogConfig);
  }

  onSubmit() {
    if (this.cartForm.invalid) {
      return;
    }
    this.openDialog();
    this.router.navigate(['collection']);
    this.store.dispatch(
      new MyCollectionActions.MyCollection({
        billingInfo: this.cartForm.value,
        bookInfo: this.bookInfo,
      })
    );
  }

  ngOnDestroy() {
    this.bookIdSubscription.unsubscribe();
    this.bookInfoSubscription.unsubscribe();
  }
}
