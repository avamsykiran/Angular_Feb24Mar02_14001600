import { Component  } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  user:User;

  constructor() { 
    this.user={userName:'',password:''};
  }

  formSubmited(){
    alert("Welcome "+this.user.userName);
  }
}
