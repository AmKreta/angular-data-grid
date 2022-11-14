import { Component, Input, OnInit } from '@angular/core';
import { COLUMN_DEFINATION } from 'DataGrid';

@Component({
  selector: 'app-default-cell-renderer',
  templateUrl: './default-cell-renderer.component.html',
  styleUrls: ['./default-cell-renderer.component.scss'],
})
export class DefaultCellRendererComponent implements OnInit {
  @Input() cellValue: any = '';
  @Input() rowId: number | string = '';
  @Input() rowIndex: number = 0;
  @Input() ColDef: COLUMN_DEFINATION | null = null;
  @Input() colIndex: number = 0;
  @Input() tabIndex=-1;
  

  constructor() {}

  ngOnInit(): void {}
}
