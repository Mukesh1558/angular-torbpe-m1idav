import { Component } from '@angular/core';
import { scan } from 'rxjs';

import { Scan } from '../scan';

@Component({
  selector: 'app-scan-form',
  templateUrl: './scan-form.component.html',
  styleUrls: ['./scan-form.component.css'],
})
export class ScanFormComponent {
  divisions = ['AA', 'EC'];

  programs = ['Program 1', 'Program 2'];

  projectNames = ['Project 1', 'Project 2'];

  decisions = ['Yes', 'No'];

  sourceTypes = ['Source 1', 'Source 2'];

  dependencyAnalysiss = ['Yes', 'No'];

  compAosss = ['Yes', 'No'];

  prossecs = ['Yes', 'No'];

  //************************************************************************* */

  model = new Scan(
    18,
    this.programs[0],
    this.divisions[0],
    this.projectNames[0],
    this.decisions[0],
    this.sourceTypes[0],
    '',
    '',
    this.dependencyAnalysiss[0],
    this.compAosss[0],
    this.prossecs[0],
    '',
    ''
  );

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newScan() {
    this.model = new Scan(42, '', '', '', '', '', '', '', '', '', '', '', '');
  }

  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value;
  }

  constructor(){}
  ngOnInit(): void{
  }

}
