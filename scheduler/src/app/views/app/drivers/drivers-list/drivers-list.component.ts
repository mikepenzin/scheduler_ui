import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewProductModalComponent } from 'src/app/containers/pages/add-new-product-modal/add-new-product-modal.component';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { DriversService } from '../service/drivers.service';
import { IDriver } from '../service/drivers.service';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {
  displayMode = 'list';
  selectAllState = '';
  selected: IDriver[] = [];
  data: IDriver[] = [];
  originalData: IDriver[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  search = '';
  orderBy = '';
  isLoading: boolean;
  endOfTheList = false;
  showDisplayMode = false;
  totalItem = 0;
  totalPage = 0;
  prefix = 'drivers-list';


  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewProductModalComponent;

  constructor(private hotkeysService: HotkeysService, private driversService: DriversService) {
    this.hotkeysService.add(new Hotkey('ctrl+a', (event: KeyboardEvent): boolean => {
      this.selected = [...this.data];
      return false;
    }));
    this.hotkeysService.add(new Hotkey('ctrl+d', (event: KeyboardEvent): boolean => {
      this.selected = [];
      return false;
    }));
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadData();
  }

  // tslint:disable-next-line:typedef
  loadData(): void {
    this.driversService.getProducts().subscribe(
      data => {
        if (data.status) {
          this.isLoading = false;
          this.originalData = data.data.map(x => {
            return {
              ...x
            };
          });
          this.data = data.data.map(x => {
            return {
              ...x
            };
          });
          this.setSelectAllState();
        } else {
          this.endOfTheList = true;
        }
      },
      error => {
        this.isLoading = false;
      }
    );
  }

  // tslint:disable-next-line:typedef
  changeDisplayMode(mode) {
    this.displayMode = mode;
  }

  // tslint:disable-next-line:typedef
  showAddNewModal() {
    this.addNewModalRef.show();
  }

  // tslint:disable-next-line:typedef
  isSelected(p: IDriver) {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }
  // tslint:disable-next-line:typedef
  onSelect(item: IDriver) {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(x => x.id !== item.id);
    } else {
      this.selected.push(item);
    }
    this.setSelectAllState();
  }

  // tslint:disable-next-line:typedef
  setSelectAllState() {
    if (this.selected.length === this.data.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  // tslint:disable-next-line:typedef
  selectAllChange($event) {
    if ($event.target.checked) {
      this.selected = [...this.data];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }

  // tslint:disable-next-line:typedef
  itemsPerPageChange(perPage: number) {
    // this.loadData(perPage, 1, this.search, this.orderBy);
    this.itemsPerPage = perPage;
  }

  // tslint:disable-next-line:typedef
  changeOrderBy(item: any) {
    // this.loadData(this.itemsPerPage, 1, this.search, item.value);
    return this.data.sort(this.dynamicSort(item.value));
  }

  // tslint:disable-next-line:typedef
  searchKeyUp(event) {
    const val = event.target.value.toLowerCase().trim();
    this.data = this.originalData.filter( (e)=> {
      return e.name.toLowerCase().includes(val) ||
             e.surname.toLowerCase().includes(val);
    });
  }

  // tslint:disable-next-line:typedef
  onContextMenuClick(action: string, item: IDriver) {
    console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.name);
  }

  // tslint:disable-next-line:typedef ban-types
  dynamicSort(property: string) {
      let sortOrder = 1;
      if(property[0] === '-') {
          sortOrder = -1;
          property = property.substr(1);
      }
      return (a: any, b: any) => {
          /* next line works with strings and numbers,
          * and you may want to customize it to your needs
          */
          const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      };
  }
}
