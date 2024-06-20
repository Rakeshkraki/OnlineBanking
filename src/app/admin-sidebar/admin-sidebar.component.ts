import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {

  admin: any = history.state['data']

  constructor(private router: Router) { }

  msgReq() {
    this.router.navigate(['/msgReq'])
  }

  usrFull() {
    //this.router.navigate(['/allUsers'], { state: { allUsers: this.allUsers } })

  }
  accFull() {
    //this.router.navigate(['/allTrans'], { state: { transactions: this.transactions } })

  }


  branches() {
    this.router.navigate(['/branches'])

  }

  addAdmin() {
    this.router.navigate(['/adminRegister'])
  }

  adminList() {

  }

}
