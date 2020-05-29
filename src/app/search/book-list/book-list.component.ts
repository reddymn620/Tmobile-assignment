import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() result;
  @Input() show = false;
  @Output() purchaseBookInfo = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  purchaseBook(result) {
    this.purchaseBookInfo.emit(result);
  }
}
