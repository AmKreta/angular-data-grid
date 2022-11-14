import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { DefaultCellEditorComponent } from './components/default-cell-editor/default-cell-editor.component';
import { DefaultCellRendererComponent } from './components/default-cell-renderer/default-cell-renderer.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { TableBodyComponent } from './components/table-body/table-body.component';
import { TableFooterComponent } from './components/table-footer/table-footer.component';
import { TableHeaderRowComponent } from './components/table-header-row/table-header-row.component';
import { DefaultTableHeaderCellRendererComponent } from './components/default-table-header-cell-renderer/default-table-header-cell-renderer.component';
import { TableBodyRowComponent } from './components/table-body-row/table-body-row.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DefaultCellEditorComponent,
    DefaultCellRendererComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableFooterComponent,
    TableHeaderRowComponent,
    DefaultTableHeaderCellRendererComponent,
    TableBodyRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
