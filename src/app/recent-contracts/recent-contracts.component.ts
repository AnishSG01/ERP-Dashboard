import { Component, ViewChild, Inject } from '@angular/core'
import { RentalService } from '../Services/rental.service'
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms'
import { provideNativeDateAdapter } from '@angular/material/core'


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


@Component({
  selector: 'app-recent-contracts',
  templateUrl: './recent-contracts.component.html',
  styleUrl: './recent-contracts.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class RecentContractsComponent {


  viewSingleRecord : string = "View all Contracts";


viewSingleRecordToggleValue = false

  toggleViewSingleRecord(){
    this.viewSingleRecordToggleValue = !this.viewSingleRecordToggleValue;
    if (this.viewSingleRecordToggleValue) {
      this.viewSingleRecord = "View Contract"
    }
    else{
      this.viewSingleRecord =  "View all Contracts"
    }
  }


  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });

  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  constructor (private _rentalService: RentalService, private sanitizer: DomSanitizer) {}

  displayedColumns: string[] = [
    'select',
    'tRcno',
    'tMcod',
    'tDsca',
    'tIwar',
    'tCsta',
    'documents'
  ]
  // displayedColumns: string[] = ['tRcno'];
  dataSource!: MatTableDataSource<any>
  


  iframes: any[] = [
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    { iframeSrc: this.sanitizer.bypassSecurityTrustResourceUrl('https://alpharck.e-emphasys.com:9543/ca/api/resources/MDS_GenericDocument-2950-1-LATEST?$token=lp5C4xXRYOsSIFVlwUcMAAk8zxJckddaCQnFcV4jUFQBRQHZ1wQsXBuEHpZ%2BS1SUht5%2FnhWE6I4N7%2FENBUmFnYag47kpZJi8ovJvx3yyNOhQFBKw3TK5NzK8vm8ZSe%2B%2F5MCThOsFH8uaKmMihcRnhuQCEU%2FA6tHt73ZzEdKTSHCwowfXhaIq%2FeGpIllrO%2BdoIgvTA7TAhCnhIoGpcvbr%2Bq%2BwNyPq7Uy38%2Fi%2BulYumg7S2KFQ6K4vXVciEf5tGc7lYDPu1iqIEJQJz14wUYGO1g%3D%3D') },
    
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
}
