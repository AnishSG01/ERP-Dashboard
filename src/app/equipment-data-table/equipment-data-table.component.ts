import { Component,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface EquipmentModel {
  position: number;
  equipment: string;
  manufacturer: string;
  serial: string;
  physicalStatus: string;
  warehouse: string
}

const ELEMENT_DATA: EquipmentModel[] = [
  {manufacturer: 'GM', equipment: 'RCA101989', serial: 'A-10', physicalStatus: 'Rent', warehouse: 'WH01', position: 0},
  {manufacturer: 'GM', equipment: 'MD0010871', serial:'4563', physicalStatus: 'Sold', warehouse: 'WH01', position: 1},
  {manufacturer: 'GM', equipment: 'MD0010872', serial:'YHG120093', physicalStatus: 'Sold', warehouse: 'WH01', position: 2},
  {manufacturer: 'GM', equipment: 'MD0010873', serial:'ABCDXYZ', physicalStatus: 'On Order', warehouse: 'WH01', position: 3},
  {manufacturer: 'GM', equipment: 'MD0010874', serial:'sd', physicalStatus: 'Rent', warehouse: 'WH01', position: 4},
  {manufacturer: 'GM', equipment: 'MD0010875', serial:'D45678', physicalStatus: 'Rent', warehouse: 'WH01', position: 5},
  {manufacturer: 'GM', equipment: 'MD0010876', serial: 'ABCXYAZ', physicalStatus: 'Rent', warehouse: 'WH01', position: 6},
  {manufacturer: 'GM', equipment: 'MD0010877', serial: '2222222222222', physicalStatus: 'Customer Stock', warehouse: 'WH01', position: 7},
  {manufacturer: 'GM', equipment: 'MD0010878', serial: '1111111111', physicalStatus: 'Returned', warehouse: 'WH01', position: 8},
  {manufacturer: 'GM', equipment: 'MD0010879', serial: 'JKIPL90234', physicalStatus: 'Returned', warehouse: 'WH01', position: 9},
  
];

@Component({
  selector: 'app-equipment-data-table',
  templateUrl: './equipment-data-table.component.html',
  styleUrl: './equipment-data-table.component.scss'
})
export class EquipmentDataTableComponent {
  displayedColumns: string[] = ['select', 'equipment', 'manufacturer', 'serial', 'physicalStatus', 'warehouse'];
  dataSource = new MatTableDataSource<EquipmentModel>(ELEMENT_DATA);
  selection = new SelectionModel<EquipmentModel>(true, []);

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: EquipmentModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
