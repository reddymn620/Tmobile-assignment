import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Input() result;
  @Input() show = false;
  @Output() purchaseBookInfo = new EventEmitter();


  ngOnInit() {}

  purchaseBook(result) {
    this.purchaseBookInfo.emit(result);
  }
}
