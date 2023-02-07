import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanFormComponent } from './scan-form/scan-form.component';
const routes: Routes = [{ path: 'scan', component: ScanFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
