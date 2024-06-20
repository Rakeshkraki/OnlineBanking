import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }
  login() {
    this.router.navigate(['/loginUser'])
  }

  RegisterNetBanking() {
    this.router.navigate(['/RegisterUser'])
  }


  PersonalDetails() {
    this.router.navigate(['/personal-details'])
  }

  adminLogin() {
    this.router.navigate(['/admin'])
  }
  currExchange() {
    this.router.navigate(['/exchange'])
  }

  authAccountStatus() {
    this.router.navigate(['/authgetAccStatus'])
  }

  graph() {
    this.router.navigate(['/getAccStatus'])

  }

}
