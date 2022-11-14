import { Component } from '@angular/core';
import {tableData, columnDefinations} from '../data/data';
import {COLUMN_DEFINATION} from 'DataGrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableData=tableData;
  columnDefinations=columnDefinations as COLUMN_DEFINATION [];
  title = 'angular-data-grid';
}
