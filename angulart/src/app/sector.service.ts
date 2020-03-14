import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Sector } from './sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  private baseUrl = 'http://localhost:8087/sector/sectors/';  
  
  
  constructor(private http:HttpClient) { }  
  
  getAllSectors(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllSectors');  
  }  
  
  saveSectors(sector: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'saveSectors', sector);  
  }  
  
  deleteSectors(id: number): Observable<object> {  
    return this.http.delete<Sector>(`${this.baseUrl}/deleteSectors/${id}`);  
  }  
  
  findOneInAll3(id: number): Observable<any> {  
    return this.http.get(`${this.baseUrl}/findOneInAll3/${id}`);  
  }  
  
  updateSectors(id: number, value: any): Observable<Object> {  
    return this.http.post<Sector>(`${this.baseUrl}/updateSectors/${id}`, value);  
  }  
    
}  