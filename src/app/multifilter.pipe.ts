import { Pipe, PipeTransform } from '@angular/core';
import { Datasheets } from './Datasheets';

@Pipe({
  name: 'multifilter'
})
export class MultifilterPipe implements PipeTransform {

  transform(Datasheet: Datasheets[], filterValue: string): Datasheets[] {
    if (!Datasheet || !filterValue) {
      return Datasheet;
    }
    return Datasheet.filter(
      (op1) =>
        op1.projectName
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase()) 
    );
     
  }

}
