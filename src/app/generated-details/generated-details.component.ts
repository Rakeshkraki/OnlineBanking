import { Component } from '@angular/core';

@Component({
  selector: 'app-generated-details',
  templateUrl: './generated-details.component.html',
  styleUrl: './generated-details.component.css'
})
export class GeneratedDetailsComponent {

  genDetails: any = history.state['res'];


  created: boolean = false

  ngOnInit() {
    if (this.genDetails != null) {
      this.created = true
    }
  }

}
