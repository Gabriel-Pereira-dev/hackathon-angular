import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserRegister } from '../model/user-register';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: UserRegister = new UserRegister('','', '', null, '');
  @Input() userDialog = false
  @Output() closeEvent = new EventEmitter<boolean>();
  submited = false

  constructor(private userService: UserService,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.user)
    this.userService.create(this.user).subscribe((user) => {
      user = user
      this.messageService.add({severity:'success', summary: 'Salvar Usuário', detail: 'Usuário salvo com sucesso!'})
      this.closeDialog
    },
    (error) => this.messageService.add({severity:'error', summary: 'Erro ao salvar', detail: error}));
  }

  closeDialog(){
    this.userDialog = false
    this.closeEvent.emit(this.userDialog)
  }

}
