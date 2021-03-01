import { Component  } from '@angular/core';
import { NumberGeneratingService } from '../number-generating.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb:number;
  ub:number;

  results:number[];
  err:string;
  inProgress:boolean;

  constructor(private numService:NumberGeneratingService) { 
    this.lb=0;
    this.ub=0;
    this.inProgress=false;
  }

  formSubmited(){
    this.results=[];
    this.err=null;
    this.inProgress=true;

    this.numService.generate(this.lb,this.ub).subscribe(
      (value) => {this.results.push(value); },
      (err) => {this.err=err; this.inProgress=false;},
      () => { this.inProgress=false;}
    );
  }
}
