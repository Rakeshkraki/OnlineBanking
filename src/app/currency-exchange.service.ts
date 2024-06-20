import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  private apiKey = 'cur_live_OVdkhRYA6zZjatAaJlmEZvO1ULOQPWFPaTQ91dpj';
  private apiUrl = `https://api.currencyapi.com/v3/latest?apikey=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getLatestRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
