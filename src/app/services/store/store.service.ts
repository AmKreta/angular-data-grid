import { Injectable } from '@angular/core';
import { COLUMN_DEFINATION } from 'DataGrid';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _columnDefinations: COLUMN_DEFINATION[] = [];
  private _tableData: {}[] = [];
  private _footerData: {}[] = [];

  // returns array of columnId in order
  // used to mantain order of column
  private _columnOrder:(string|number)[]=[];

  constructor() {}

  // replaces prev column defination
  // ans recalculates _columnOrder
  set columnDefinations(defs: COLUMN_DEFINATION[]) {
    this._columnDefinations = defs;
    this._columnOrder=this._columnDefinations.map(coldef=>coldef.id!);
  }

  // returns column defination
  get columnDefinations(): COLUMN_DEFINATION[] {
    return this._columnDefinations;
  }

  // replaces table data
  set tableData(data: {}[]) {
    this._tableData = data;
  }

  // returnd table data
  get tableData(): {}[] {
    return this._tableData;
  }

  // replaces footer data
  set footerData(data: {}[]) {
    this._footerData = data;
  }

  // returns table data
  get footerData(): {}[] {
    return this._footerData;
  }

  // get row data by index
  getRowDataByIndex(index:number){
    return this.tableData[index];
  }


}
