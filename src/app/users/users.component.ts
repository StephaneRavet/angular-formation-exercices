import {UserService} from './user.service';
import {Component, OnInit, Input} from '@angular/core';
import {User} from '../shared/user.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() criteria: string;
  users: User[];
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  async ngOnInit() {
    // this.users$ = this.userService.get$();
    this.users = await this.userService.get();
  }

  add() {
    this.users = this.userService.add();
  }

  remove(index) {
    this.users = this.userService.removeUser(index);
  }

  trackByUserId(user: User): number {
    return user.id;
  }

  onSearchChange(criteria: string) {
    this.criteria = criteria;
  }
}
