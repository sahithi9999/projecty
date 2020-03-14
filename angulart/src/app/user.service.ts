import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from './user';
  
@Injectable({  
  providedIn: 'root'  
})  
  
export class UserService {  
  
  private baseUrl = 'http://localhost:8087/user/UserPortal/';  
  getUserList: any;
  
  constructor(private http:HttpClient) { }  
  
  getAllUser(): Observable<any> {  
    return this.http.get(this.baseUrl+'getAllUser');  
  }  
  
  saveUser(user: object): Observable<any> {  
    return this.http.post(this.baseUrl+'saveUser', user);  
  }  
  
  deleteUser(id: number): boolean {  
    this.http.delete(this.baseUrl+'deleteUser/'+id, {responseType:'json'}).subscribe();  
    return true;
  }  
  
  findOneInAll5(id: number): Observable<any> {  
    return this.http.get<User>(this.baseUrl+'findOneInAll5/'+id);  
  }  
  
  updateUser(id: number): Observable<any> {  
    return this.http.put(this.baseUrl+'updateUser/{id}',id);  
  }  
  findByUserNameAndPassword(userName:String, password:String):Observable<User>{

    return this.http.get<User>(this.baseUrl+'/findByUserNameAndPassword/'+userName+'/'+password);
  
   }
   uploadFile( file: File , id : number ) : Observable<any>  
   {  
     let url = this.baseUrl + "uploadImage/" + id ;  
   
     const formdata: FormData = new FormData();  
     
     formdata.append('file', file);  
    
     return this.http.post(url , formdata);  
   }  
   
    
}  