import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Ipos } from './ipos';

@Injectable({
  providedIn: 'root'
})
export class IposService {

  private baseUrl = 'http://localhost:8087/Ipos/ipos/';  
  
  
  constructor(private http:HttpClient) { }  
  
  getAllIpos(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllIpos');  
  }  
  
  saveIpos(ipos: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveIpos', ipos);  
  }  
  
  deleteIpos(id: number): Observable<any> {  
    return this.http.delete<Ipos>(`${this.baseUrl}/deleteIpos/${id}`);  
  }  
  
  findOneInAll2(id: number): Observable<any> {  
    return this.http.get<Ipos>(`${this.baseUrl}/findOneInAll2/${id}`);  
  }  
  
  updateIpos(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/updateIpos/${id}`, value);  
  }  
    
}  
