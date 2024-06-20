import { Component } from '@angular/core';

@Component({
  selector: 'app-all-account-users',
  templateUrl: './all-account-users.component.html',
  styleUrl: './all-account-users.component.css'
})
export class AllAccountUsersComponent {

  allUsers = history.state['allUsers']

}
