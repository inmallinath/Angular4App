import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//Services
import { GeomappingService } from './geomapping.service'
import { DataService } from './data.service'

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';

const routes: Routes = [
  { path: '', component: ExpenseListComponent },
  { path: 'expense', component: ExpenseDetailComponent },
  { path: 'expense/:id', component: ExpenseDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatIconModule, 
    MatInputModule, 
    MatSelectModule, 
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GeomappingService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
