import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Services
import { GeomappingService } from './geomapping.service'
import { DataService } from './data.service'

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatInputModule, 
    MatSelectModule, 
    MatToolbarModule
  ],
  providers: [
    GeomappingService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
