import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
 
  title : string;
  logo : string;
  logos:string[];

  isBordered:boolean;
  isCentered:boolean;
  isRounded:boolean;
  
  constructor(){
    this.title="My First Angular App";
    this.logos=[
      "assets/images/w1.jpg",
      "assets/images/w2.jpg"
    ];
    this.logo=this.logos[0];

    this.isCentered=false;
    this.isBordered=false;
    this.isRounded=false;
  }
  
  toggleImage(){
    console.log(this.logo);
    if(this.logo==this.logos[0]){
      this.logo=this.logos[1];
    }else{
      this.logo=this.logos[0];
    }
  }

}
