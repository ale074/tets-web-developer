import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showOnlyTheLastFour'
})
export class ShowOnlyTheLastFourPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    let result: string = "";
    if (value.length) {
      for (let index = 0; index < value.length; index++) {
        if (index < value.length - 5 && value[index] != " ") {
          result += args;
        } else {
          result += value[index];
        }
        
      }
    }
    return result;
  }

}
