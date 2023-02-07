import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ScanFormComponent } from './scan-form/scan-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    GridModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ScanFormComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
export class HttpModule { }
