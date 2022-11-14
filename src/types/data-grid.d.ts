declare module "DataGrid" {
  export interface RENDERER<> {}

  export interface CELL_RENDERER extends RENDERER {}

  export interface HEADER_RENDERER extends RENDERER {}

  export interface FOOTER_RENDERER extends RENDERER {}

  export interface RENDERER_PARAMS {}

  export interface HEADER_RENDERER_PARAMS extends RENDERER_PARAMS {}

  export interface FOOTER_RENDERER_PARAMS extends RENDERER_PARAMS {}

  export interface CELL_RENDERER_PARAMS extends RENDERER_PARAMS {}

  export interface CELL_EDITOR_PARAMS extends CELL_RENDERER_PARAMS {}

  export interface ROW_DATA{
    id?:string|number;
    data:{[key:string]:any};
    columnDefinations:COLUMN_DEFINATION[];
  }


  export interface COLUMN_DEFINATION{
    id?: string | number;
    displayName:string | number;
    cellRenderer?: CELL_RENDERER;
    headerRenderer?: HEADER_RENDERER;
    footerRenderer?: FOOTER_RENDERER;
    headerRendererParams: HEADER_RENDERER_PARAMS;
    footerParams: FOOTER_RENDERER_PARAMS;
    cellParams: CELL_RENDERER_PARAMS;
    pinned?: boolean;
    hide?: boolean;
    valueGetter?: (props: COLUMN_DEFINATION) => string | number;
    cellStyle?: (props: COLUMN_DEFINATION) => { [key: string]: string };
    cellClass?: (props: COLUMN_DEFINATION) => string[];
    resizable?: boolean;
    autoHeight?: boolean;
    wrapText?: boolean;
    onCellValueChange?: (props: CELL_RENDERER_PARAMS) => void;
  }
}
