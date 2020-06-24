import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  criteria: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onInputChange() {
    this.search.emit(this.criteria);
  }

  clearCriteria() {
    this.criteria = '';
    this.onInputChange();
  }

}
