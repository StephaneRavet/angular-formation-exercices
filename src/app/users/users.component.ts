import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersService: UsersService;
  users: any[] = [];
  @Input() search: string;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  ngOnInit() {
    this.usersService.get().then(data => this.users = data);
  }

}
