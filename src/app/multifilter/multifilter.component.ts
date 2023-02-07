import { Component } from '@angular/core';
import { Datasheets } from '../Datasheets';

@Component({
  selector: 'app-multifilter',
  templateUrl: './multifilter.component.html',
  styleUrls: ['./multifilter.component.css'],
})
export class MultifilterComponent {
  Datasheet: Datasheets[] = [];
  filterValue!: string;

  option1 = ['Project 1', 'Project 2'];
  option2 = ['done', 'progress'];
  option3 = ['Project 1', 'Project 2'];
  option4 = ['Project 1', 'Project 2'];

  model = new Datasheets(
    this.option1[0],
    this.option2[0],
    this.option3[0],
    this.option4[0]
  );
}
