import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ROW_DATA } from 'DataGrid';

@Component({
  selector: 'app-table-body-row',
  templateUrl: './table-body-row.component.html',
  styleUrls: ['./table-body-row.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TableBodyRowComponent implements OnInit, AfterViewInit {

  @Input() rowData: ROW_DATA | null=null;
  @Input() rowIndex:number=0;
  @Input() numCols=0;
  @Input() top:number=0;
  @ViewChild('container') containerRef!:ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {
    this.containerRef.nativeElement.parentElement!.style.position='absolute';
    this.containerRef.nativeElement.parentElement!.style.top=this.top+'px';
  }

}
