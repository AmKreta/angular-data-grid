import { Component, Input, OnInit } from '@angular/core';
import { COLUMN_DEFINATION } from 'DataGrid';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  @Input() columnDefinations:COLUMN_DEFINATION[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
