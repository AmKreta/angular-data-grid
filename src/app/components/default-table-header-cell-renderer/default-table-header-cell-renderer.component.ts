import { Component, Input, OnInit } from '@angular/core';
import { COLUMN_DEFINATION } from 'DataGrid';

@Component({
  selector: 'app-default-table-header-cell-renderer',
  templateUrl: './default-table-header-cell-renderer.component.html',
  styleUrls: ['./default-table-header-cell-renderer.component.scss']
})
export class DefaultTableHeaderCellRendererComponent implements OnInit {

  @Input() columnDefination:COLUMN_DEFINATION|null=null;
  @Input() index:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
