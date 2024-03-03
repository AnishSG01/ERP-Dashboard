import { Component, ViewChild  } from '@angular/core';
import { RentalService } from '../Services/rental.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-recent-quotations',
  templateUrl: './recent-quotations.component.html',
  styleUrl: './recent-quotations.component.scss'
})
export class RecentQuotationsComponent {

  displayedColumns: string[] = ['select', 'tRcno', 'tMcod', 'tDsca', 'tIwar'];
  // displayedColumns: string[] = ['tRcno'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  constructor(private _rentalService : RentalService ){} 

  ngOnInit(): void {
    this.getRecentContracts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRecentContracts(){
    this._rentalService.getRecentContracts().subscribe({
      next: (res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  }
}
 