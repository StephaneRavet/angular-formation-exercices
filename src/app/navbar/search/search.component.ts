import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  username: string;
  @Output() updated: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sendChange() {
    this.updated.emit(this.username);
  }
}
