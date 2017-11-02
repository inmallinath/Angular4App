import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GeomappingService } from './geomapping.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GeomappingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
