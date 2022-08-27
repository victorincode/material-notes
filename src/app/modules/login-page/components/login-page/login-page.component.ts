import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
  showingPassword: boolean = false;
  signInForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
   }
  ngOnInit(): void {
  }
  get email(){
    return this.signInForm.get("email");
  }
  get emailErrorMessage(){
    if(this.email?.hasError("required")) return "Email is required!";
    return "Email is not valid!";
  }
  get password(){
    return this.signInForm.get("password");
  }
  onShowPassword(){
    this.showingPassword = !this.showingPassword;
  }
  onSubmit(){

  }
}
