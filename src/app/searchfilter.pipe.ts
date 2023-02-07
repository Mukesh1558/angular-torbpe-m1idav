import { Pipe, PipeTransform } from '@angular/core';
import { Datasheets } from './Datasheets';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(Datasheet: Datasheets[], searchValue: string): Datasheets[] {
    if (!Datasheet || !searchValue) {
      return Datasheet;
    }
    return Datasheet.filter(
      (s) =>
        s.projectName
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        s.status
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        s.lastScannedOn
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        s.duration.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}
