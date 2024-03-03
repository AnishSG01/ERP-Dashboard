import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecentContract } from '../Models/recentContractsModel';

@Injectable({
  providedIn: 'root'
})
export class InvoiceOnHoldService {

  constructor(private http: HttpClient) { }

  public getInvoiceOnHold() : Observable<number>{
    return this.http.get<number>('https://localhost:7082/api/RentalContract/contracts/invHold/cnt');
  }
}
