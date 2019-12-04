npm i axios

UserService

import axios from 'axios'

get() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}
