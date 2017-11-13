import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// Services
import { GeomappingService } from './geomapping.service';
import { DataService } from './data.service';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
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
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GeomappingService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
