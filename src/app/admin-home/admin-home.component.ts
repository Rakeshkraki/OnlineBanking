import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  admin: any = history.state['data']

  transactions: any = [];

  deposits: any = [];

  allUsers: any = [];

  netBankUsers: any = [];

  paymentForm: FormGroup = this.fb.group({});


  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router
  ) { }

  ngOnInit() {
    this.fetchSentTransactions();
    this.fetchUsers();
    this.fetchNetBankUsers()
    this.paymentForm = this.fb.group({
      amount: ['', [Validators.required]],
      accountNumber: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  fetchSentTransactions(): void {
    this.http.get<any[]>(`https://localhost:7287/api/Transaction`)
      .subscribe(
        data => {
          this.transactions = data;
        },
        error => {
          console.error('Error fetching sent transactions:', error);
        }
      );
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      const formValues = this.paymentForm.value;

      this.http.post(`https://localhost:7287/api/Transaction/Deposit?accountNum=${formValues.accountNumber}&amount=${formValues.amount}`, {})
        .subscribe(
          data => {
            this.deposits = data;
          },
          error => {
            console.error('Error fetching sent transactions:', error);
          }
        );

    }
  }

  fetchUsers(): void {
    this.http.get<any[]>(`https://localhost:7287/api/CreateAccount`)
      .subscribe(
        data => {
          this.allUsers = data;
        },
        error => {
          console.error('Error fetching sent transactions:', error);
        }
      );
  }

  fetchNetBankUsers(): void {
    this.http.get<any[]>(`https://localhost:7287/api/NetBank`)
      .subscribe(
        data => {
          this.netBankUsers = data;
        },
        error => {
          console.error('Error fetching sent transactions:', error);
        }
      );
  }

  msgReq() {
    this.router.navigate(['/msgReq'])
  }

  usrFull() {
    this.router.navigate(['/allUsers'], { state: { allUsers: this.allUsers } })

  }
  accFull() {
    this.router.navigate(['/allTrans'], { state: { transactions: this.transactions } })

  }


  branches() {
    this.router.navigate(['/branches'])

  }

  addAdmin() {
    this.router.navigate(['/adminRegister'])
  }

  adminList() {

  }

  logout() {
    this.router.navigate(['/'])
  }
}
