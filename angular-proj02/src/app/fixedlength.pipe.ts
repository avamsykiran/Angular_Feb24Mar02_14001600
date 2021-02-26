import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixedlength'
})
export class FixedlengthPipe implements PipeTransform {

  transform(value: string, length: number): string {

    let diff = length - value.length;

    let result = "";

    if (diff == 0) {
      result = value;
    } else if (diff > 0) {
      result = value;
      for (let i = 1; i <= diff; i++) {
        result += "-";
      }
    } else {
      result = value.substr(0,length-1) + "...";
    }

    return result;
  }

}
