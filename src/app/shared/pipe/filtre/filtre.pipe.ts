import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == undefined || args == ''){
      return value
    }

    return value.filter(collegue => collegue.nom.toUpperCase().includes(args.toUpperCase()))
  }

}
