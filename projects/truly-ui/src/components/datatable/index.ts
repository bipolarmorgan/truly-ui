import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TlDatatable } from './datatable';
import { TlDatatableColumn } from './parts/column/datatable-column';
import { TlDatatableHeader } from './parts/header/datatable-header';
import { TlDatatableContent } from './parts/content/datatable-content';
import { TlColgroupDirective } from './directives/colgroup.directive';
import { TlResizerDirective } from './directives/resizer.directive';
import { TlDatatabaleColumnFilter } from './parts/column-filter/datatable-column-filter';

import { IconsModule } from '../icons/index';
import { InputModule } from '../input/index';
import { BlockUIModule } from '../blockui/index';
import { DropDownListModule } from '../dropdownlist/index';
import { DropDownIconModule } from '../dropdownicon/index';
import { TlDatatableRow } from './parts/row/datatable-row';
import { TlDatatableCell } from './parts/cell/datatable-cell';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { A11yModule } from '@angular/cdk/a11y';


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    BlockUIModule,
    IconsModule,
    InputModule,
    DropDownIconModule,
    DropDownListModule,
    ScrollingModule,
    A11yModule
  ],
  declarations: [
    TlColgroupDirective,
    TlDatatable,
    TlDatatableColumn,
    TlDatatabaleColumnFilter,
    TlDatatableCell,
    TlDatatableRow,
    TlDatatableHeader,
    TlDatatableContent,
    TlResizerDirective,
  ],
  exports: [
    TlDatatable,
    TlDatatableColumn,
  ]
} )
export class DatatableModule {
}
