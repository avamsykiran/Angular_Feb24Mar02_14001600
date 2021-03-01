import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  greet(userName:string):string{
    let greeting:string;

    let h = (new Date()).getHours();

    if(h>=4 && h<=11){
      greeting="Good Morning ";      
    }else if(h>=12 && h<=17){
      greeting="Good Noon ";      
    }else{
      greeting="Good Evening ";      
    }

    return greeting + userName;
  }
}
