import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.sass']
})
export class RegisterPageComponent implements OnInit {
  readonly passwordMinLength: number = 8;
  showingPassword: boolean = false;
  registerForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
      confirmedPassword: ['',[Validators.required]],
    });
   }
  ngOnInit(): void {
  }
  get email(){
    return this.registerForm.get("email");
  }
  get emailErrorMessage(){
    if(this.email?.hasError("required")) return "Email is required!";
    return "Email is not valid!";
  }
  get password(){
    return this.registerForm.get("password");
  }
  get passwordErrorMessage(){
    if(this.password?.hasError("required")) return "Password is required!";
    if(this.password?.hasError("minlength")) return `Password must be at least ${this.passwordMinLength} characters!`; 
    return "Password is not valid!";
  }
  get confirmedPassword(){
    return this.registerForm.get("confirmedPassword");
  }
  onShowPassword(){
    this.showingPassword = !this.showingPassword;
  }
  onSubmit(){

  }
}
