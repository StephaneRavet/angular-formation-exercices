import {Pipe, PipeTransform} from '@angular/core';
import {User} from './user.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], criteria: string): User[] {
    if (!criteria) {
      return users;
    }
    return users.filter(
      user => user.name
        .toLowerCase().includes(criteria.toLowerCase())
    );
  }

}
