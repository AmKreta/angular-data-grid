import { Component, Input, OnInit } from '@angular/core';
import { COLUMN_DEFINATION } from 'DataGrid';
import { StoreService } from 'src/app/services/store/store.service';
import { defaultValueGetter } from 'src/utils/utils';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() tableData: { [key: string]: any }[] = [];
  @Input() columnDefinations: COLUMN_DEFINATION[] = [];
  @Input() defaultColumnDefination: Partial<COLUMN_DEFINATION> = {};

  constructor(private store:StoreService) {
    this.store.columnDefinations=this.columnDefinations;
  }

  ngOnInit(): void {
    this.columnDefinations.forEach(colDef=>{
      // adding id
      if(!Object.prototype.hasOwnProperty.call(colDef,'id'))
        colDef.id=Math.random().toString();
      
      // adding default value getter
      if(!colDef.valueGetter)
      colDef.valueGetter=defaultValueGetter;
    });
    // add config
  }
}
