import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private $http: HttpClient) { }

  listAll() {
    return this.$http.get<User[]>('usuario')
    }


  }


