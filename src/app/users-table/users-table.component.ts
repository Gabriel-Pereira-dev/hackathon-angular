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
  editUserId?: number


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listAll().subscribe(users => {
      this.users = users;
    })
  }

  openAddUserDialog(id?: number){
    console.log(id)
    this.editUserId = id
    this.userDialog = true
  }

  deleteUser(id: number){
    this.userService.delete(id).subscribe(() => {
      this.userService.listAll().subscribe(users => {
        this.users = users;
      })
    })
  }

}
