import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratingService {
  
  constructor() { }

  generate(lb:number,ub:number):Observable<number>{
    let job = (observer:Observer<number>) => {

      if(lb>ub){
        observer.error("Invalid limits");
      }else{

        let n=lb;

        let ref = setInterval(()=>{
           observer.next(n);
           n++; 
           if(n>ub){
              clearInterval(ref);
              observer.complete();
           }
        },1000);
      }
    };

    return new Observable<number>(job);
  }
}
