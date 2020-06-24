import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../shared/user.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormControl, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  _checkEmail(input: FormControl): Promise<ValidationErrors | null> {
    return this.http
      .get(this.url + '/1')
      .toPromise()
      .then((user: User) => {
        return user.email === input.value ? {emailExists: true} : null;
      });
  }

  async get(): Promise<User[]> {
    return this.users = await this.http
      .get<User[]>(this.url)
      .toPromise();
  }

  get$(): Observable<User[]> {
    return this.http
      .get<User[]>(this.url)
      .pipe(
        map((users: User[]) => {
          return users.map((user: User) => {
            user.address.fullAddress =
              user.address.street
              + ', ' + user.address.suite
              + ', ' + user.address.zipcode
              + ' ' + user.address.city;
            return user;
          });
        }),
      );
  }

  add(): User[] {
    const newIndex = this.users.length + 1;
    const newUser = {name: `Test${newIndex}`, id: newIndex};
    return this.users = [...this.users, newUser];
  }

  removeUser(index): User[] {
    this.users.splice(index, 1);
    return this.users = [...this.users];
  }
}
