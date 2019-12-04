import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;
  searchCriteria: string;

  constructor() {
    this.name = 'Stéphane';
  }
}
