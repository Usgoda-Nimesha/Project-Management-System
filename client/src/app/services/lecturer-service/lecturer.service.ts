import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private http:HttpClient) { }

  getModules() {
    return this.http.get<any>(environment.apiBaseUrl + "/lecturerDashboard");
  }

  addSection(data:any){
    return this.http.post<any>(environment.apiBaseUrl+"/addSection",data)
  }

  getSubmissions(pid:string ){
    return this.http.get<any>(environment.apiBaseUrl + `/getSubmissions/${pid}`);
  }
  getProject(_id:string){
    return this.http.get<any>(environment.apiBaseUrl + `/getProject/${_id}`);
  }

}
