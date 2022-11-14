import { Component, Input, OnInit } from '@angular/core';
import { COLUMN_DEFINATION } from 'DataGrid';

@Component({
  selector: 'app-table-header-row',
  templateUrl: './table-header-row.component.html',
  styleUrls: ['./table-header-row.component.scss'],
})
export class TableHeaderRowComponent implements OnInit {
  @Input() columnDefinations: COLUMN_DEFINATION[] | null = null;
  constructor() {}

  ngOnInit(): void {}
}
