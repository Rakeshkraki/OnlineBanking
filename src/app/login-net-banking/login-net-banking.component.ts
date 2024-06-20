import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtiltityService } from '../utiltity.service';


@Component({
  selector: 'app-login-net-banking',
  templateUrl: './login-net-banking.component.html',
  styleUrl: './login-net-banking.component.css'
})
export class LoginNetBankingComponent {
  pan: string = '';
  password: string = '';
  termsAccepted: boolean = false;



  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) { }


  submitForm() {
    if (!this.termsAccepted) {
      console.error("Terms and conditions must be accepted.");
      return;
    }

    this.http.get<any>(`https://localhost:7287/api/NetBank/login?pan=${this.pan}&password=${this.password}`)
      .subscribe(
        response => {
          this.http.get(`https://localhost:7287/api/NetBank/pan/${this.pan}`).subscribe(
            (res) => {
              this.router.navigate(['/netBankHome'], { state: { response, res } });
              console.log(res)
            })

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
