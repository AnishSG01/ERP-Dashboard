import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecentContract } from '../Models/recentContractsModel';
import { InvoiceOnHoldContracts } from '../Models/InvoiceOnHoldContracts';

@Injectable({
  providedIn: 'root'
})
export class InvoiceOnHoldService {

  constructor(private http: HttpClient) { }

  public getInvoiceOnHold() : Observable<number>{
    return this.http.get<number>('https://localhost:7082/api/RentalContract/contracts/invHold/cnt');
  }

  public getInvoiceOnHoldRows() : Observable<InvoiceOnHoldContracts[]>{
    return this.http.get<InvoiceOnHoldContracts[]>('https://localhost:7082/api/RentalContract/contracts/invHold');
  }
}
