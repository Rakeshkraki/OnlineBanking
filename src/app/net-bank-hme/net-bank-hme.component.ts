import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-net-bank-hme',
  templateUrl: './net-bank-hme.component.html',
  styleUrls: ['./net-bank-hme.component.css']
})
export class NetBankHmeComponent implements OnInit {
  user: any;
  userAllDetails: any;
  paymentForm: FormGroup = this.fb.group({});

  reqForm: FormGroup = this.fb.group({});


  userBalance: number;

  sentTransactions: any[] = [];
  receivedTransactions: any[] = [];


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService,
    private _snackBar: MatSnackBar,
  ) {
    this.user = history.state['response'];
    this.userAllDetails = history.state['res'];
    this.userBalance = this.user.balance;
  }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      amount: ['', [Validators.required, this.amountValidator.bind(this)]],
      accountNumber: ['', [Validators.required]],
      ifscCode: ['', [Validators.required]],
      password: ['', [Validators.required, this.passsWordValidator.bind(this)]]
    });

    this.reqForm = this.fb.group({
      amount: ['', [Validators.required, this.amountValidator.bind(this)]],
    });



    this.updateUser();
  }

  amountValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value > this.userBalance) {
      return { amountExceedsBalance: true };
    }
    return null;
  }



  passsWordValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value != this.user.password) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      const formValues = this.paymentForm.value;
      const fromAccount = this.user.accountNumber;
      const toAccount = formValues.accountNumber;
      const amount = formValues.amount;

      const url = `https://localhost:7287/api/Transaction?fromAccount=${fromAccount}&toAccount=${toAccount}&amount=${amount}`;

      this.http.post(url, formValues)
        .subscribe({
          next: (response) => {
            console.log('Transaction successful:', response);
            this.ngOnInit();
            this._snackBar.open("payment Successful", 'Close', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          },
          error: (error) => {
            console.error('Transaction failed:', error);
            this.toastr.error('Payment failed. Please try again.', 'Error');
          }
        });
    }
    this.ngOnInit();

  }

  updateUser() {
    this.http.get(`https://localhost:7287/api/NetBank/NetBankUser/${this.user.pan}`).subscribe(
      (res) => {
        this.user = res;
        this.userBalance = this.user.balance;
      },
      (error) => {
        console.error('Failed to update user data:', error);
        this.toastr.error('Failed to update user data.', 'Error');
      }
    );
  }

  ViewMyDetails() {
    this.router.navigate(['/viewUserDetails'], { state: { userAllDetails: this.userAllDetails } });
  }





  deposit() {
    this.router.navigate(['/deposit'])
  }

  logout() {
    this.router.navigate(['/loginUser'])
  }

  onRequest() {

    if (this.reqForm.valid) {
      const reqAmount = this.reqForm.value;
      const amount = reqAmount.amount;

      this._snackBar.open("Request Successful", 'Close', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      const url = `https://localhost:7287/api/Values/Request?accountNumber=${this.user.accountNumber}&amount=${amount}`;

      this.http.post(url, {})
        .subscribe({
          next: (response) => {
            this._snackBar.open("Request Successful", 'Close', {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          },
          error: (error) => {
            console.error('Transaction failed:', error);
            this.toastr.error('Payment failed. Please try again.', 'Error');
          }
        });
    }

    this.ngOnInit();
  }


  transactions() {
    this.router.navigate(['/userAllTrans'], { state: { num: this.user.accountNumber } })
  }

}
