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
import { ConfirmationService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './service/user.service'
import { APIInterceptorProvider } from './interceptors/apiinterceptor';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersTableComponent,
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
    MessageModule
  ],
  providers: [
    APIInterceptorProvider,
    UserService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
