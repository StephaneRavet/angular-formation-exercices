import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  criteria: string;
  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  sendCriteria() {
    this.search.emit(this.criteria);
  }
}
