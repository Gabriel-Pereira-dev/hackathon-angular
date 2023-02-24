import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber'
import {PasswordModule} from 'primeng/password'
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask'


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './service/user.service'
import { APIInterceptorProvider } from './interceptors/apiinterceptor';
import { UsersTableComponent } from './users-table/users-table.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersTableComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    RippleModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    InputNumberModule,
    PasswordModule,
    InputTextModule,
    InputMaskModule
  ],
  providers: [
    APIInterceptorProvider,
    UserService,
    ConfirmationService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
