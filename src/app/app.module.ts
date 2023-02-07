import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScanFormComponent } from './scan-form/scan-form.component';
import { ScandetailsComponent } from './scandetails/scandetails.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import { MultifilterComponent } from './multifilter/multifilter.component';
import { MultifilterPipe } from './multifilter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ScanFormComponent,
    ScandetailsComponent,
    SearchfilterPipe,
    MultifilterComponent,
    MultifilterPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class HttpModule {}
