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

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './service/user.service'
import { APIInterceptorProvider } from './interceptors/apiinterceptor';
import { UsersTableComponent } from './users-table/users-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersTableComponent
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
  ],
  providers: [APIInterceptorProvider,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
