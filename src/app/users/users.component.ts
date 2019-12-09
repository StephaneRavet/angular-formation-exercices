import {Component, Input, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  @Input() search: string;

  constructor(private userService: UserService) {
  }

  async ngOnInit() {
    this.users = await this.userService.get();
  }

}
