import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-login-form2',
  templateUrl: './login-form2.component.html',
  styleUrls: ['./login-form2.component.css']
})
export class LoginForm2Component {

  loginForm : FormGroup;

  unmFC: FormControl;
  pwdFC: FormControl;

  user:User;

  constructor() { 
    this.unmFC = new FormControl('',
        [Validators.required,Validators.minLength(3),Validators.maxLength(15)]);
    this.pwdFC = new FormControl('',
        [Validators.required,Validators.minLength(8)]);        

    this.loginForm = new FormGroup({
      'userName':this.unmFC,
      'password':this.pwdFC
    });    
  }

  formSubmited(){
    this.user = this.loginForm.value;
    alert("Hello " + this.user.userName);
  }
}
