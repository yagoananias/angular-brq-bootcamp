import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length == 11){
      return value.substring(0,3) + '.' + value.substring(3,6)
      + '.' + value.substring(6,9) + '-' + value.substring(9,11);
    }
    else {
      return "Digite direito minino";
    }
  }

}
