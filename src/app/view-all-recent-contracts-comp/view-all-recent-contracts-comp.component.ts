import { Component, ViewChild, Inject } from '@angular/core'
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { DomSanitizer } from '@angular/platform-browser';
import { ViewAllRecentContractsService } from '../Services/view-all-recent-contracts.service'
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-view-all-recent-contracts-comp',
  templateUrl: './view-all-recent-contracts-comp.component.html',
  styleUrl: '../recent-contracts/recent-contracts.component.scss'
})
export class ViewAllRecentContractsCompComponent {
  constructor (private _rentalService: ViewAllRecentContractsService, private sanitizer: DomSanitizer) {}

  displayedColumns: string[] = [
    'select',
    'tRcno',
    'tMcod',
    'tDsca',
    'tIwar',
    'documents'
  ]
  // displayedColumns: string[] = ['tRcno'];
  dataSource!: MatTableDataSource<any>
  


  iframes: any[] = [
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFTO3ppFF4tA6MSCEHExYm97ht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFTO3ppFF4tA6MSCEHExYm97ht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFTO3ppFF4tA6MSCEHExYm97ht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFTO3ppFF4tA6MSCEHExYm97ht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFTO3ppFF4tA6MSCEHExYm97ht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFTO3ppFF4tA6MSCEHExYm97ht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    
];


responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  

  ngOnInit (): void {
    this.getRecentContracts()
  }

  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  } 

  getRecentContracts () {
    this._rentalService.getRecentContracts().subscribe({
      next: res => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error: console.log
    })
  }

  modalOpen = false

  toggleModalOpen (): void {
    this.modalOpen = !this.modalOpen
  }



  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'table_data');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const a: HTMLAnchorElement = document.createElement('a');
    document.body.appendChild(a);
    a.href = window.URL.createObjectURL(data);
    a.download = `${fileName}.xlsx`;
    a.click();
    document.body.removeChild(a);
  }

}
