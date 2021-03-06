import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { Subject } from 'rxjs';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  title = 'Example for Angular 7 DataTable';
  dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject = new Subject();
  dtUsers =[
    {"id": 101, "firstName": "Anil", "lastName": "Singh"},
    {"id": 102, "firstName": "Reena", "lastName": "Singh"},
    {"id": 103, "firstName": "Aradhay", "lastName": "Simgh"},
    {"id": 104, "firstName": "Dilip", "lastName": "Singh"},
    {"id": 105, "firstName": "Alok", "lastName": "Singh"},
    {"id": 106, "firstName": "Sunil", "lastName": "Singh"},
    {"id": 107, "firstName": "Sushil", "lastName": "Singh"},
    {"id": 108, "firstName": "Sheo", "lastName": "Shan"},
    {"id": 109, "firstName": "Niranjan", "lastName": "R"},
    {"id": 110, "firstName": "Lopa", "lastName": "Mudra"},
    {"id": 111, "firstName": "Paramanand","lastName": "Tripathi"},
    {"id": 112, "firstName": "aditya", "lastName": "singh"},
    {"id": 113, "firstName": "sharjeel", "lastName": "ahmad"},
    {"id": 114, "firstName": "pratiksha", "lastName": "Mudra"},
    {"id": 115, "firstName": "ravi", "lastName": "kumar"},
    {"id": 116, "firstName": "dines", "lastName": "das"},
    {"id": 117, "firstName": "manish", "lastName": "kumar"},

  ];

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      // data:this.dtUsers,
      // columns: [{title: 'User ID', data: 'id'},
      //       {title: 'First Name', data: 'firstName'},
      //       {title: 'Last Name', data: 'lastName' }],
            pagingType: 'full_numbers',
            pageLength: 4
    };
  }

  download()
  {
    var doc = new jsPDF();
    
    doc.text('Hello world!', 10, 10);
    doc.save('test.pdf');
  }

}


// import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
// import { MdbTableDirective, MdbTablePaginationComponent, MdbTableService } from 'ng-uikit-pro-standard';
// @Component({
//   selector: 'app-datatables',
//   templateUrl: './datatables.component.html',
//   styleUrls: ['./datatables.component.scss']
// })
// export class DatatablesComponent implements OnInit, AfterViewInit {

//   @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
//   @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
//   @ViewChild('row') row: ElementRef;

//   elements: any = [];
//   headElements = ['ID', 'First', 'Last', 'Handle'];

//   searchText: string = '';
//   previous: string;

//   maxVisibleItems: number = 8;
//   firstItemIndex: any;
//   lastItemIndex: any;

//   constructor(private tableService: MdbTableService,
//     private cdRef: ChangeDetectorRef) {
//   }

//   @HostListener('input') oninput() {
//     this.mdbTablePagination.searchText = this.searchText;
//   }

//   ngOnInit() {
//     for (let i = 1; i <= 25; i++) {
//       this.elements.push({ id: i.toString(), first: 'Wpis ' + i, last: 'Last ' + i, handle: 'Handle ' + i });
//   }

//     this.tableService.setDataSource(this.elements);
//     this.elements = this.tableService.getDataSource();
//     this.previous = this.tableService.getDataSource();
//   }

//   ngAfterViewInit() {
//     this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);
//     this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
//     this.lastItemIndex = this.mdbTablePagination.lastItemIndex;

//     this.mdbTablePagination.calculateFirstItemIndex();
//     this.mdbTablePagination.calculateLastItemIndex();
//     this.cdRef.detectChanges();
//   }

//   addNewRow() {
//     // tslint:disable-next-line:max-line-length
//     this.tableService.addRow({ id: this.elements.length.toString(), first: 'Wpis ' + this.elements.length, last: 'Last ' + this.elements.length, handle: 'Handle ' + this.elements.length });
//     this.emitDataSourceChange();
//   }

//   addNewRowAfter() {
//     this.tableService.addRowAfter(1, { id: '2', first: 'Nowy', last: 'Row', handle: 'Kopytkowy' });
//     this.tableService.getDataSource().forEach((el: any, index: any) => {
//       el.id = (index + 1).toString();
//     });
//     this.emitDataSourceChange();
//   }

//   removeLastRow() {
//     this.tableService.removeLastRow();
//     this.emitDataSourceChange();
//     this.tableService.rowRemoved().subscribe((data: any) => {
//       console.log(data);
//     });
//   }

//   removeRow() {
//     this.tableService.removeRow(1);
//     this.tableService.getDataSource().forEach((el: any, index: any) => {
//       el.id = (index + 1).toString();
//     });
//     this.emitDataSourceChange();
//     this.tableService.rowRemoved().subscribe((data: any) => {
//       console.log(data);
//     });
//   }

//   emitDataSourceChange() {
//     this.tableService.dataSourceChange().subscribe((data: any) => {
//       console.log(data);
//     });
//   }

//   onNextPageClick(data: any) {
//     this.firstItemIndex = data.first;
//     this.lastItemIndex = data.last;
//   }

//   onPreviousPageClick(data: any) {
//     this.firstItemIndex = data.first;
//     this.lastItemIndex = data.last;
//   }

//   searchItems() {
//     const prev = this.tableService.getDataSource();

//     if (!this.searchText) {
//       this.tableService.setDataSource(this.previous);
//       this.elements = this.tableService.getDataSource();
//     }

//     if (this.searchText) {
//       this.elements = this.tableService.searchLocalDataBy(this.searchText);
//       this.tableService.setDataSource(prev);
//     }

//     this.mdbTablePagination.calculateFirstItemIndex();
//     this.mdbTablePagination.calculateLastItemIndex();

//     this.tableService.searchDataObservable(this.searchText).subscribe((data: any) => {
//       if (data.length === 0) {
//         this.firstItemIndex = 0;
//       }

//       if (this.tableService.getDataSource().length !== data.length) {
//         this.firstItemIndex = 1;
//         this.lastItemIndex = this.maxVisibleItems;
//       }

//       this.mdbTablePagination.calculateFirstItemIndex();
//       this.mdbTablePagination.calculateLastItemIndex();

//     });
//   }

// }
