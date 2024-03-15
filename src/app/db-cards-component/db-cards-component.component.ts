import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RentalService } from '../Services/rental.service';
import {MatPaginator} from '@angular/material/paginator';
import { InvoiceOnHoldService } from '../Services/invoice-on-hold.service';

@Component({
  selector: 'app-db-cards-component',
  templateUrl: './db-cards-component.component.html',
  styleUrls: ['./db-cards-component.component.scss']
})
export class DbCardsComponentComponent implements OnInit {


  progressBarValue : number = 60;

 constructor (private _invoiceOnHoldService: InvoiceOnHoldService) {}

  displayedColumns: string[] = [
    'tRcno',
    'tEqup',
    'tIntp'
  ]
  dataSource!: MatTableDataSource<any>;
  invHoldCnt !: number;

  @ViewChild(MatPaginator) paginator !: MatPaginator;


  ngOnInit (): void {
    this.getContractsOnHold();
    this.getContractsOnHoldCount();
  }

  getContractsOnHold () {
    this._invoiceOnHoldService.getInvoiceOnHoldRows().subscribe({
      next: res => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator
      },
      error: console.log
    })
  }

  getContractsOnHoldCount () {
    this._invoiceOnHoldService.getInvoiceOnHold().subscribe({
      next: res => {
        this.invHoldCnt = res
      },
      error: console.log
    })
  }


moreDetailsVisble = false;

toggleMoreDetailsVisible(){
  this.moreDetailsVisble = !this.moreDetailsVisble;
}
 
}
