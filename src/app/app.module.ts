import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './service/user.service'
import { APIInterceptorProvider } from './interceptors/apiinterceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [APIInterceptorProvider,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
