import {
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { COLUMN_DEFINATION } from 'DataGrid';
import { debounce, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class TableBodyComponent implements OnInit, AfterViewInit {
  @Input() tableData: { [key: string]: any }[] = [];
  @Input() columnDefinations: COLUMN_DEFINATION[] = [];
  @Input() defaultColumnDefination: Partial<COLUMN_DEFINATION> = {};
  @ViewChild('tableBody', { static: false })
  tableBodyRef!: ElementRef<HTMLDivElement>;
  public numCols: number = 0;
  public numRows = 0;

  // used to render rows
  public renderableRows: { [key: string]: any }[] = [];

  // used for calculating the rows
  // which we want to show in our fixed side window
  public containerDimensions = { height: 0, width: 0 };
  public renderableRowStartIndex = 0;
  public renderableRowsEndIndex = 0;
  public isContainerFilled = false;
  // row height till now is a map which contains
  // sum of height of previous rows + height of current row
  public rowHeightTillNow: number[] = [];
  public rowHeightTillNowIndexMap = new Map<number, number>();
  private lastScrollPosition: number = -1;

  constructor() {}

  ngOnInit(): void {
    this.numCols = this.columnDefinations.length;
    this.numRows = this.tableData.length;
    this.rowHeightTillNow = Array.from(Array(this.numCols));
  }

  ngAfterViewInit() {
    this.recalculateContainerDimension();
    this.reCalculateRowHeightTillNowFromIndex(0);
    this.reCalculateVisibleRowsRange();
    const onWheels = fromEvent(this.tableBodyRef.nativeElement, 'wheel').pipe(
      debounce(() => interval(15))
    );
    onWheels.subscribe((x) => {
      this.reCalculateVisibleRowsRange();
    });
  }

  recalculateContainerDimension() {
    // calculating container dimensions
    this.containerDimensions.height =
      this.tableBodyRef.nativeElement.offsetHeight;
    this.containerDimensions.width =
      this.tableBodyRef.nativeElement.offsetWidth;
  }

  reCalculateRowHeightTillNowFromIndex(index = 0) {
    // calcculating row heights
    let height = this.rowHeightTillNow[index] || 0;
    let childNodes = this.tableBodyRef.nativeElement.childNodes;
    for (let i = index; i < this.numRows; i++) {
      let node = childNodes[i] as HTMLDivElement;
      let childNodeHeight = node.offsetHeight;
      height += childNodeHeight;
      this.rowHeightTillNow[i] = height;
      this.rowHeightTillNowIndexMap.set(height, i);
    }
    this.tableBodyRef.nativeElement.style.height =
      this.rowHeightTillNow.at(-1) + 'px';
  }

  reCalculateVisibleRowsRange() {
    let scrollTop = this.tableBodyRef.nativeElement.parentElement!.scrollTop;
    if(this.lastScrollPosition>=scrollTop-10 && this.lastScrollPosition<=scrollTop-10)
      return;
    let startIndex:number = -1;
    if (scrollTop === 0) startIndex = 0;
    else {
      while (startIndex < 0) {
        let i = this.rowHeightTillNowIndexMap.get(scrollTop);
        if (i) startIndex = i;
        scrollTop--;
        if(scrollTop===0)
          startIndex=0;
      }
    }
    
    let endIndex=startIndex+1;  

    let contentHeight=startIndex===0
      ?this.rowHeightTillNow[0]
      :this.rowHeightTillNow[startIndex]-this.rowHeightTillNow[startIndex-1];
    
    let containerHeight=this.tableBodyRef.nativeElement.parentElement?.offsetHeight!;

    while(contentHeight<containerHeight && endIndex<this.numRows){
      let height=this.rowHeightTillNow[endIndex]-this.rowHeightTillNow[endIndex-1];
      contentHeight+=height;
      endIndex++;
    }
    
    // rendering some extra elements
    startIndex=Math.max(0, startIndex-5);
    endIndex=Math.min(this.numRows, endIndex+5);

    // container height from scroll height
    this.renderableRowStartIndex = startIndex;
    this.renderableRowsEndIndex = endIndex;
    this.renderableRows = this.tableData.slice(startIndex, endIndex + 1);
    this.lastScrollPosition=scrollTop;
  }
}
