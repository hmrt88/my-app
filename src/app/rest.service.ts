import { ListpeopleComponent } from './listpeople/listpeople.component';
import { People } from './listpeople/people';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  listpeople: any = [];
  constructor( private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url);// Get
  }
  
  
}
