import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Datasheets } from '../Datasheets';

@Component({
  selector: 'app-scandetails',
  templateUrl: './scandetails.component.html',
  styleUrls: ['./scandetails.component.css'],
})
export class ScandetailsComponent implements OnInit {
  Datasheet: Datasheets[] = [];
  searchValue!: string;
  filterValue!: string;
  service = [
    {
      projectName: 'project1',
      status: 'done',
      lastScannedOn: 'now',
      duration: 'mins',
    },
    {
      projectName: 'project2',
      status: 'done',
      lastScannedOn: 'now',
      duration: 'mins',
    },
  ];

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    /*this.httpClient
      .get('/assets/Datasheet.json')
      .subscribe((result: Datasheets[]) => {
        this.Datasheet = result;
      });*/
  }
}
