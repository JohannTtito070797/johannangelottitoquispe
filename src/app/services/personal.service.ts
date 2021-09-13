import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Personal,PersonalEliminar } from '../models/Personal';
import { GLOBAL } from '../api';



@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  
  public url:string;
  
  
   formData: Personal;  
   list : Personal[];

  constructor(public _http:HttpClient) {
      this.url = GLOBAL.api_uri;
      
   }

  // refreshPersonal(){
  //   this._http.get(this.url+'/personal/listar').
  //   toPromise().then(res=>{
  //     this.list = res as Personal[];
  //     console.log("Service refresPersonal Realizado",this.list);
  //   })
  // }

  getPersonal():Observable<Personal[]>{
    return this._http.get<Personal[]>(`${this.url}/personal`);
  }

  addPersonal(personal : Personal):Observable<Personal>
  {
    return this._http.post(`${this.url}/personal/`, personal);
  }

  updatePersonal(personal:Personal):Observable<Personal>{
    return this._http.put(`${this.url}/personal`,personal);
  }

  getPersona(id:number){
    return this._http.get(`${this.url}/personal/${id}`);
  }
  
  deletePersonal(id:number){
    return this._http.delete(`${this.url}/personal/${id}`);
    
  }

}
