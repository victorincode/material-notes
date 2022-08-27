import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageComponent
  }
];

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesignModule,
  ]
})
export class RegisterPageModule { }
