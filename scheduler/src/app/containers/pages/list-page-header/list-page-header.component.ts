import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list-page-header',
  templateUrl: './list-page-header.component.html'
})
export class ListPageHeaderComponent implements OnInit {
  displayOptionsCollapsed = false;

  @Input() showOrderBy = true;
  @Input() showSearch = true;
  @Input() showItemsPerPage = true;
  @Input() showDisplayMode = false;
  @Input() displayMode = 'list';
  @Input() prefix = '';
  @Input() selectAllState = '';
  @Input() itemsPerPage = 10;
  @Input() itemOptionsPerPage = [5, 10, 20];
  @Input() itemOrder = { label: 'name', value: 'name' };
  @Input()  itemOptionsOrders = [{ label: 'name', value: 'name' },
                                 { label: 'surname', value: 'surname' },
                                 { label: 'role', value: 'role' },
                                 { label: 'status', value: 'status' }];

  @Output() changeDisplayMode: EventEmitter<string> = new EventEmitter<string>();
  @Output() addNewItem: EventEmitter<any> = new EventEmitter();
  @Output() selectAllChange: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyUp: EventEmitter<any> = new EventEmitter();
  @Output() itemsPerPageChange: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderBy: EventEmitter<any> = new EventEmitter();

  @ViewChild('search') search: any;
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  onSelectDisplayMode(mode: string): void {
    this.changeDisplayMode.emit(mode);
  }
  onAddNewItem(): void {
    this.addNewItem.emit(null);
  }
  selectAll(event): void {
    this.selectAllChange.emit(event);
  }
  onChangeItemsPerPage(item): void {
    this.itemsPerPageChange.emit(item);
  }

  onChangeOrderBy(item): void {
    this.itemOrder = item;
    this.changeOrderBy.emit(item);
  }

  onSearchKeyUp($event): void {
    this.searchKeyUp.emit($event);
  }
}
