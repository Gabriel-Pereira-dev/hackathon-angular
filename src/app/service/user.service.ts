import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { UserRegister } from '../model/user-register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private $http: HttpClient) { }

  listAll() {
    return this.$http.get<User[]>('usuario')
    }

  create(user: UserRegister) {
    return this.$http.post<UserRegister>('usuario', user)
  }

}


