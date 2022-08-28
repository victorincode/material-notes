import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DeletionConfirmationComponent } from './components/deletion-confirmation/deletion-confirmation.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    DeletionConfirmationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesignModule
  ]
})
export class HomePageModule { }
