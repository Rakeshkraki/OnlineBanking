import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtiltityService {

  UserMainDetails: any;

  constructor(private http: HttpClient) { }

  GetUserMainDet() {

    return this.UserMainDetails;

  }

  setUserMainDet(pan: string) {
    this.http.get(`https://localhost:7287/api/NetBank/pan/${pan}`).subscribe(
      (res) => {
        this.UserMainDetails = res;
      })
  }

  // constructor() {
  //   this.loadUser();
  // }

  // private loggedUser: any;

  // setUser(user: any) {
  //   this.loggedUser = user;
  //   localStorage.setItem('loggedUser', JSON.stringify(user));
  // }

  // getUser(): any {
  //   return this.loggedUser;
  // }

  // private loadUser() {
  //   const user = localStorage.getItem('loggedUser');
  //   if (user) {
  //     this.loggedUser = JSON.parse(user);
  //   }
  // }

  // clearUser() {
  //   this.loggedUser = undefined;
  //   localStorage.removeItem('loggedUser');
  // }
}
