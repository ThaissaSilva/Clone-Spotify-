import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Login1Component } from './player/pages/login1/login1.component';



@NgModule({
  declarations: [
    LoginComponent,
    Login1Component
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
