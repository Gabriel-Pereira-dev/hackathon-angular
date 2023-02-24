import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
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
  @Input() editUserId?: number
  @Output() closeEvent = new EventEmitter<boolean>();
  submited = false

  constructor(private userService: UserService,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.editUserId?.previousValue !== changes.editUserId?.currentValue && changes.editUserId?.currentValue ){
      this.getUser()
    }
  }

  save(){
    if(this.editUserId){
      this.userService.update(this.user).subscribe((user) => {
        user = user
        this.messageService.add({severity:'success', summary: 'Salvar Usuário', detail: 'Usuário alterado com sucesso!'})
        this.closeDialog()
      },
      (error) => this.messageService.add({severity:'error', summary: 'Erro ao salvar', detail: error.error}))
    }else{
      this.userService.create(this.user).subscribe((user) => {
        user = user
        this.messageService.add({severity:'success', summary: 'Salvar Usuário', detail: 'Usuário salvo com sucesso!'})
        this.closeDialog()
      },
      (error) => this.messageService.add({severity:'error', summary: 'Erro ao salvar', detail: error.error}))
    }

  }

  closeDialog(){
    this.userDialog = false
    this.closeEvent.emit(this.userDialog)
  }

  getUser(){
    this.userService.findByid(this.editUserId).subscribe((user) => {
      this.user = user
    },
    (error) => this.messageService.add({severity:'error', summary: 'Erro ao salvar', detail: error}));
  }

}
