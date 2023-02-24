import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  userDialog = false
  users: User[] = []


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listAll().subscribe(users => {
      this.users = users;
    })
  }

  openAddUserDialog(){
    this.userDialog = true
  }

}
