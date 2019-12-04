import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  get(): Promise<[]> {
    return axios.get('http://jsonplaceholder.typicode.com/users').then(result => result.data);
  }
}
