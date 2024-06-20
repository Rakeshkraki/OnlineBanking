import { Component } from '@angular/core';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrl: './all-transactions.component.css'
})
export class AllTransactionsComponent {

  transactions = history.state['transactions']

}
