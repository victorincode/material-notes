import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => import('../login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: "register",
    loadChildren: () => import('../register-page/register-page.module').then(m => m.RegisterPageModule)
  },
  {
    path: "**",
    loadChildren: () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
