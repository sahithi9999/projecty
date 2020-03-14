import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from './user';
import { Stockprice } from './stockprice';
  

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {

  private baseUrl = 'http://localhost:8087/stockprice/stockprice';  

  
  constructor(private http:HttpClient) { }  
  
  getAllStockprice(): Observable<any> {  
    return this.http.get<Stockprice>(this.baseUrl+'/getAllStockprice');  
  }  
  
  saveStockprice(stockprice: object): Observable<object> {  
    return this.http.post(this.baseUrl+'/saveStockprice', stockprice);  
  }  
  
  deleteStockprice(sid: number): Observable<Stockprice> {  
    return this.http.delete<Stockprice>(`${this.baseUrl}/deleteStockprice/${sid}`);  
  }  
  
  findOneInAll5(sid: number): Observable<any> {  
    return this.http.get<Stockprice>(this.baseUrl+'/findOneInAll5/'+sid);  
  }  
  
  updateStockprice(sid: number, value: any): Observable<any> {  
    return this.http.put<Stockprice>(this.baseUrl+'/updateStockprice'+sid, value);  
  }  
  uploadFile(file: File, sid: number): Observable<any> {
    let url = this.baseUrl + "uploadfile/" + sid;
    const formdata: FormData = new FormData();
  formdata.append('file', file);
      return this.http.post(url, formdata);
  
    }
  getmultiplelinechart(): Observable<any> {
    return this.http.get(this.baseUrl+'/multiplelinechart');
    }
}  