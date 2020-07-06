import { CellValue, RowData, RowModel, Rows } from './rows';
import { ColDef, Columns } from './colDef';
import * as React from 'react';
import { ReactNode } from 'react';
import { SortDirection, SortModel } from './sortModel';
import { Logger } from '../hooks/utils';
import { ArrowDownward, ArrowUpward, SeparatorIcon } from '../components/icons';
import { PageChangedParams, PaginationProps } from '../hooks/features/usePagination';
import { GridApiRef, GridRootRef } from './gridApiRef';

export interface ColumnHeaderClickedParam {
  field: string;
  column: ColDef;
}
export interface ColumnSortedParams {
  sortedColumns: ColDef[];
  sortModel: SortModel;
}
export interface RowClickedParam {
  element: HTMLElement;
  rowModel: RowModel;
  data: RowData;
  rowIndex: number;
  colDef: ColDef;
}

export interface CellClickedParam {
  element: HTMLElement;
  value: CellValue;
  field: string;
  data: RowData;
  rowIndex: number;
  colDef: ColDef;
}

export interface RowSelectedParam {
  data: RowData;
  rowIndex: number;
  isSelected: boolean;
}
export interface SelectionChangedParam {
  rows: RowData[];
}

export interface IconsOptions {
  columnSortedAscending?: React.FC<{}>;
  columnSortedDescending?: React.FC<{}>;
  columnResize?: React.FC<{ className: string }>;
}

export interface ComponentParams {
  paginationProps: PaginationProps;
  rows: Rows;
  columns: Columns;
  options: GridOptions;
  api: GridApiRef;
  rootElement: GridRootRef;
}

//Todo add multiSortKey
export interface GridOptions {
  autoHeight?: boolean;
  rowHeight: number;
  headerHeight: number;
  scrollbarSize: number;
  columnBuffer: number;
  enableMultipleSelection: boolean; //ag=> rowSelection : Single | Multiple
  enableMultipleColumnsSorting: boolean;
  showCellRightBorder: boolean;
  extendRowFullWidth: boolean;
  sortingOrder: SortDirection[];
  pagination?: boolean;
  paginationPageSize?: number;
  paginationAutoPageSize?: boolean;
  paginationRowsPerPageOptions?: number[];
  hideFooter?: boolean;
  hideFooterRowCount?: boolean;
  hideFooterSelectedRowCount?: boolean;
  hideFooterPagination?: boolean;

  onCellClicked?: (param: CellClickedParam) => void;
  onRowClicked?: (param: RowClickedParam) => void;
  onRowSelected?: (param: RowSelectedParam) => void;
  onSelectionChanged?: (param: SelectionChangedParam) => void;
  onColumnHeaderClicked?: (param: ColumnHeaderClickedParam) => void;
  onColumnsSorted?: (params: ColumnSortedParams) => void;
  onPageChanged?: (param: PageChangedParams) => void;
  onPageSizeChanged?: (param: PageChangedParams) => void;

  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
  showColumnSeparator?: boolean;
  logger?: Logger;
  logLevel?: string | boolean;
  paginationComponent?: (props: PaginationProps) => React.ReactNode;
  loadingOverlayComponent?: React.ReactNode;
  noRowsOverlayComponent?: React.ReactNode;
  footerComponent?: (params: ComponentParams) => React.ReactNode;
  headerComponent?: (params: ComponentParams) => React.ReactNode;
  icons: IconsOptions;
}

export const DEFAULT_GRID_OPTIONS: GridOptions = {
  autoHeight: false,
  rowHeight: 52,
  headerHeight: 56,
  scrollbarSize: 15,
  columnBuffer: 2,
  enableMultipleSelection: true,
  enableMultipleColumnsSorting: true,
  paginationRowsPerPageOptions: [25, 50, 100],
  showCellRightBorder: false,
  extendRowFullWidth: true,
  sortingOrder: ['asc', 'desc', null],
  icons: {
    // eslint-disable-next-line react/display-name
    columnSortedAscending: () => <ArrowUpward className={'icon'} />,
    // eslint-disable-next-line react/display-name
    columnSortedDescending: () => <ArrowDownward className={'icon'} />,
    columnResize: SeparatorIcon,
  },
};