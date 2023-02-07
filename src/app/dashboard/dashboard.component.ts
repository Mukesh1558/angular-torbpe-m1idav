import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScanFormComponent } from '../scan-form/scan-form.component';

//constructor(private router: Router) { }


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  details = [
    { id: '01', name: 'Mukesh', age: 23, subject: 'Tamil' },
    { id: '01', name: 'Mukesh', age: 23, subject: 'Tamil' },
  ];



}
