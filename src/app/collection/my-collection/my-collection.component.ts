import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app.state';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionItems } from 'src/app/store/models/collection-item.model';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss'],
})
export class MyCollectionComponent implements OnInit {
  public collectionInfo = [];
  collection: CollectionItems[] = [];

  constructor(
    private store: Store<AppState>,
    private appService: AppService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    store.select('collection').subscribe((data) => {
      this.collectionInfo = data;
      console.log('collection Data = ', data);
    });
    store.pipe(select('collection')).subscribe((data) => {
      this.collection = data;
    });
  }

  ngOnInit() {}
}
