import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';

const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent
  }
];

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesignModule,
  ]
})
export class LoginPageModule { }
