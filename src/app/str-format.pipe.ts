import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strFormat'
})
export class StrFormatPipe implements PipeTransform {

  transform(value: string, seperator: string, endVal?: string): string {
    let vals= value.split(' ').join(seperator);
    if(endVal)
    vals += endVal;
    return vals;
  }

}
