import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecentContract } from '../Models/recentContractsModel';

@Injectable({
  providedIn: 'root'
})
export class ViewAttachementsService {

  constructor(private http: HttpClient) { }

  // public getRecentContracts() : Observable<string>{

  //   const headers = new HttpHeaders({
  //     'Authorization': 'Bearer fc2462348a885e4c347da74e88ddd4c5' // Example Authorization header
  //   });

  //   return this.http.get<string>('https://alpharck.e-emphasys.com:7443/infor/IDM/api/items/search/item/resource?$query=/MDS_GenericDocument[@MDS_id1 = "RTR005262"]', { headers: headers });
  // }
}
