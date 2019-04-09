import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table/typings/table-data-source';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit {

  tableColumns  :  string[] = ['Id', 'first Name', 'last Name'];
  dataSource  = [
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
  }

}
