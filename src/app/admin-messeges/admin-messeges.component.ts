import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-messeges',
  templateUrl: './admin-messeges.component.html',
  styleUrl: './admin-messeges.component.css'
})
export class AdminMessegesComponent {

  messeges: any = []

  constructor(private router: Router, private http: HttpClient, private _snackBar: MatSnackBar,) { }
  msgReq() {
    this.router.navigate(['/msgReq'])
  }

  deposit(accountNumber: any, amount: any, id: any) {
    this.http.post(`https://localhost:7287/api/Transaction/Deposit?accountNum=${accountNumber}&amount=${amount}`, {})
      .subscribe(
        (res) => {
          this._snackBar.open(" Successfully Deposited", 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

          this.http.put(`https://localhost:7287/api/Values?id=${id}`, {}).subscribe(
            (res) => {
            }
          )

        },
        error => {
          console.error('Error fetching sent transactions:', error);
        }


      )
    this.ngOnInit();


  }



  ngOnInit() {
    this.fetchMesseges();
  }

  fetchMesseges(): void {
    this.http.get<any[]>(`https://localhost:7287/api/Values`)
      .subscribe(
        data => {
          this.messeges = data;
        },
        error => {
          console.error('Error fetching sent transactions:', error);
        }
      );
  }



}
