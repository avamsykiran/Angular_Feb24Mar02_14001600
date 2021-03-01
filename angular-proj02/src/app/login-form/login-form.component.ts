import { Component  } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent  {

  user:User;

  constructor(private userService:UserService) { 
    this.user={userName:'',password:''};
  }

  formSubmited(){
    alert(this.userService.greet(this.user.userName));
  }
}
