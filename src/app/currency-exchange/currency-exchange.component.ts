import { Component } from '@angular/core';
import { CurrencyExchangeService } from '../currency-exchange.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrl: './currency-exchange.component.css'
})
export class CurrencyExchangeComponent {
  rates: any;
  baseCurrency = 'USD';
  targetCurrency = 'EUR';
  amount = 1;
  convertedAmount: number | undefined;
  rate!: number;
  currentDate: Date = new Date();



  constructor(private currencyService: CurrencyExchangeService) { }

  ngOnInit(): void {
    // this.currencyService.getLatestRates().subscribe(data => {
    //   this.rates = data.data;
    //   this.convert();
    // });
  }

  convert(): void {
    if (this.rates) {
      this.rate = this.rates[this.targetCurrency].value;
      this.convertedAmount = this.amount * this.rate;
    }
  }

  onSwap(): void {
    const temp = this.baseCurrency;
    this.baseCurrency = this.targetCurrency;
    this.targetCurrency = temp;
    this.convert();
  }

}
