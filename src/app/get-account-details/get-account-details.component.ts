import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, TimeScale, Title, Tooltip, Legend, LinearScale, LineElement, PointElement, LineController } from 'chart.js';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-get-account-details',
  templateUrl: './get-account-details.component.html',
  styleUrls: ['./get-account-details.component.css']
})
export class GetAccountDetailsComponent {

  // transactionsByDate: any[] = [];

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get<any[]>(`https://localhost:7287/api/Transaction/dateWise`).subscribe(data => {
  //     this.transactionsByDate = data;
  //     this.createChart();
  //   });
  // }

  // createChart(): void {
  //   const ctx = document.getElementById('transactionChart') as HTMLCanvasElement;

  //   Chart.register(
  //     TimeScale,
  //     Title,
  //     Tooltip,
  //     Legend,
  //     LinearScale,
  //     LineElement,
  //     PointElement,
  //     LineController
  //   );

  //   new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: this.transactionsByDate.map(t => t.transactionDate),
  //       datasets: [{
  //         label: 'Total Transactions',
  //         data: this.transactionsByDate.map(t => t.totalTransactions),
  //         backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //         borderColor: 'rgba(255, 99, 132, 1)',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           type: 'time',
  //           time: {
  //             unit: 'day',
  //             tooltipFormat: 'PP'
  //           },
  //           title: {
  //             display: true,
  //             text: 'Date'
  //           }
  //         },
  //         y: {
  //           beginAtZero: true,
  //           title: {
  //             display: true,
  //             text: 'Total Transactions'
  //           }
  //         }
  //       }
  //     }
  //   });
  // }
}
