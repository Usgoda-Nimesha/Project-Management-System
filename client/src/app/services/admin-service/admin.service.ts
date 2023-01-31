import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  selectedUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
  };

  constructor(private http: HttpClient) {}

  ////////////////////////////// DEGREE ////////////////////////////////////
  postDegree(data: any) {
    return this.http.post(environment.apiBaseUrl + '/degree', data);
  }

  getDegree() {
    return this.http.get<any>(environment.apiBaseUrl + '/degree');
  }

  updateDegree(data: any, _id: string) {
    return this.http.put(environment.apiBaseUrl + `/degree/${_id}`, data);
  }

  deleteDegree(_id: string) {
    return this.http.delete(environment.apiBaseUrl + `/degree/${_id}`);
  }

  ////////////////////////////////// MODULE //////////////////////////////////
  postModule(data: any) {
    return this.http.post(environment.apiBaseUrl + '/saveModule', data);
  }

  getModules(degreeId: string) {
    return this.http.get<any>(environment.apiBaseUrl + `/module/${degreeId}`);
  }

  editModules(data: any, _id: string) {
    return this.http.put(environment.apiBaseUrl + `/module/${_id}`, data);
  }

  deleteModules(_id:string){
    return this.http.delete(environment.apiBaseUrl+`/module/${_id}`)
  }

  ///////////////////////////////// LECTURER /////////////////////////////////

    registerLectuurer(user: User) {
      return this.http.post(environment.apiBaseUrl + '/register',user,);
    }
}
