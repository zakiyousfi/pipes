import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentiel'
})
export class ExponentielPipe implements PipeTransform {

  transform(value:number,expone:number): number {
    return Math.pow(value,expone);
  }

}
