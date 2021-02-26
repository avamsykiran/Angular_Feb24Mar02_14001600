import { Component  } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent  {

  str:string;
  num:number;
  today:Date;

  constructor() {
    this.str="hello World";
    this.num=Math.PI*100;
    this.today=new Date();
  }

}
