import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialDesignModule } from '../material-design/material-design.module';

const routes: Routes = [
  {
    path: "",
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesignModule
  ]
})
export class PageNotFoundModule { }
