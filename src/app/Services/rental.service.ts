import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecentContract } from '../Models/recentContractsModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  public getRecentContracts() : Observable<RecentContract[]>{
    return this.http.get<RecentContract[]>('https://localhost:7082/api/RentalContract/contracts/recent');
  }
}
