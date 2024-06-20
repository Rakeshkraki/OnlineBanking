import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UtiltityService } from '../utiltity.service';

@Component({
  selector: 'app-auth-get-account-details',
  templateUrl: './auth-get-account-details.component.html',
  styleUrl: './auth-get-account-details.component.css'
})
export class AuthGetAccountDetailsComponent {

  pan: string = '';
  termsAccepted: boolean = false;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  submitForm() {
    if (!this.termsAccepted) {
      console.error("Terms and conditions must be accepted.");


      this.http.get(`https://localhost:7287/api/GeneratedValues/Pan?pan=${this.pan}`)
        .subscribe(
          res => {
            this.router.navigate(['/genDetails'], { state: { res } });
            console.log(res);
          },
          error => {
            console.error('Login failed:', error);
            let errorMessage = 'Unknown Error';
            if (error.error instanceof ErrorEvent) {
              errorMessage = `Error: ${error.error.message}`;
            } else {
              errorMessage = error.error;
            }
            this._snackBar.open(errorMessage, 'Close', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }
        );
    }
  }

}
