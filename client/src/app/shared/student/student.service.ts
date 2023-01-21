import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getSection(_id:string){
    return this.http.get<any>(environment.apiBaseUrl + `/getProject/${_id}`);
  }

  saveProject(data:any){
    return this.http.post<any>(environment.apiBaseUrl + "/saveProject",data);
  }
}
