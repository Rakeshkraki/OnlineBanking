import { Component } from '@angular/core';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrl: './view-user-details.component.css'
})
export class ViewUserDetailsComponent {
  userDetails: any = history.state['userAllDetails']
  constructor() { }

  ngOnInit(): void {

  }

}
