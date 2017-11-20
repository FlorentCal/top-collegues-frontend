import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str=''
    if(value > 0){
      str=`<span class="text-success">+ ${value}</span>`
    } else if(value < 0){
      str=`<span class="text-danger">+ ${value}</span>`
    } else {
      str=`<span>+ ${value}</span>`
    }
    return str
  }

}
