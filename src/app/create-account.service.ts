import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  apiUrl = 'https://localhost:7082/api/CreateAccount';

  constructor(private http: HttpClient) { }

  submitUserDetails(userDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, userDetails);
  }


  getUser(): Observable<any> {
    return this.http.get(this.apiUrl)
  }
}
