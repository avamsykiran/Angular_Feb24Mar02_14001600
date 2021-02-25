import { Component } from '@angular/core';

@Component({
  selector: 'app-struc-direct-demo',
  templateUrl: './struc-direct-demo.component.html',
  styleUrls: ['./struc-direct-demo.component.css']
})
export class StrucDirectDemoComponent {

  n1:number;
  n2:number; 

  showSum:boolean;
  showDif:boolean;
  showProd:boolean;
  showQut:boolean;
  showRem:boolean;

  friends:string[];

  constructor() { 
    this.n1=0;
    this.n2=0;

    this.showSum=false;
    this.showDif=false;
    this.showProd=false;
    this.showQut=false;
    this.showRem=false;

    this.friends=[
      "Vamsy","Suma","Vinay","Varun","Sravani"
    ];
  }

}
