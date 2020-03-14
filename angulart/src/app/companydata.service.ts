import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Companydata } from './companydata';
  

@Injectable({
  providedIn: 'root'
})
export class CompanydataService {
  private baseUrl = 'http://localhost:8087/companydata/companydata/';  
  
  
  constructor(private http:HttpClient) { }  
  
  getAllCompanydata(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllCompanydata');  
  }  
  
  saveCompanydata(companydata: object): Observable<object> {  
    return this.http.post(this.baseUrl+'saveCompanydata', companydata);  
  }  
  
  deleteCompanydata(companyName: object): Observable<any> {  
    return this.http.delete<Companydata>(this.baseUrl+`deleteCompanydata/`+companyName);  
  }  
  
  findOneInAll1(companyName: String): Observable<any> {  
    return this.http.get(this.baseUrl+`findOneInAll1/`+companyName);  
  }  
  
  updateCompanydata(companyName: String, value: any): Observable<any> {  
    return this.http.post(this.baseUrl+`updateCompanydata/`+companyName, value);  
  }  
    
}  