import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Stockexchange} from './stockexchange';


@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {

  private baseUrl = 'http://localhost:8087/stockexchange/stockexchange/';  
  
  
  constructor(private http:HttpClient) { }  
  
  getAllStockexchange(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllStockexchange');  
  }  
  
  saveStockexchange(stockexchange: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveStockexchange', stockexchange);  
  }  
  
  deleteStockexchange(id: number): Observable<any> {  
    return this.http.delete<Stockexchange>(`${this.baseUrl}/deleteStockexchange/${id}`);  
  }  
  
  findOneInAll4(id: number): Observable<any> {  
    return this.http.get<Stockexchange>(`${this.baseUrl}/findOneInAll4/${id}`);  
  }  
  
  updateStockexchange(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/updateStockexchange/${id}`, value);  
  }  
    
}  