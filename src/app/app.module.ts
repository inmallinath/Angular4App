import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Services
import { GeomappingService } from './geomapping.service'
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GeomappingService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
