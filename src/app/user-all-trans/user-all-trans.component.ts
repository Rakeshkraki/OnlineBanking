import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-all-trans',
  templateUrl: './user-all-trans.component.html',
  styleUrl: './user-all-trans.component.css'
})
export class UserAllTransComponent {

  sentTransactions: any[] = [];
  receivedTransactions: any[] = [];

  accountNumber = history.state['num']

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchSentTransactions();
    this.fetchReceivedTransactions();
  }

  fetchSentTransactions(): void {
    this.http.get<any[]>(`https://localhost:7287/api/Transaction/Sent/${this.accountNumber}`)
      .subscribe(
        data => {
          this.sentTransactions = data;
        },
        error => {
          console.error('Error fetching sent transactions:', error);
        }
      );
  }

  fetchReceivedTransactions(): void {
    this.http.get<any[]>(`https://localhost:7287/api/Transaction/Recived/${this.accountNumber}`)
      .subscribe(
        data => {
          this.receivedTransactions = data;
        },
        error => {
          console.error('Error fetching received transactions:', error);
        }
      );
  }

  back() {
    this.router.navigate(['/netBankHome'])
  }

}
