import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { companymodel } from '../Model/companymodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/company';


  GetallCompany(): Observable<companymodel[]> {
    return this.http.get<companymodel[]>(this.apiurl);
  }

  GetCompanybycode(id: any): Observable<companymodel> {
    return this.http.get<companymodel>(this.apiurl + '/' + id);
  }


  RemoveCompanybycode(id:any): Observable<any> {
    return this.http.delete(this.apiurl + '/' + id);
  }

  CreateCompany(companydata: any) {
    return this.http.post(this.apiurl, companydata);

  }

  UpdateCompany(id: any, companydata: any) {
    return this.http.put(this.apiurl + '/' + id, companydata);

  }
}
