import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { User } from './user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    password: '',
  };

  noAuthentication = { headers: new HttpHeaders({ NoAuth: 'True' }) };

  constructor(private http: HttpClient) {}

  // http
  postUser(user: User) {
    return this.http.post(
      environment.apiBaseUrl + '/register',
      user,
      this.noAuthentication
    );
  }

  login(authCredentials) {
    return this.http.post(
      environment.apiBaseUrl + '/login',
      authCredentials,
      this.noAuthentication
    );
  }

  getUser(path) {
    return this.http.get(environment.apiBaseUrl + path);
  }

  // functions
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      // decode encoded data
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  findUserType(token) {
    return JSON.parse(atob(token.split('.')[1]))['role'];
  }
}
