import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from '../entity/Expense';
import { GeomappingService } from '../geomapping.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private geomap: GeomappingService) { }

  // Another way to get params is to declare a var
  // that would then subscribe to the router params
  // to get the parameter value (other commented code)
  expense: Expense;
  types: string[] = [ 'Housing', 'Kids', 'Car', 'Groceries', 'Health', 'Clothing'];
  modes: string[] = [ 'Cash', 'TD M Credit Card', 'TD P Credit Card',
                    'TD M Debit Card', 'TD P Debit Card', 'TD M Cheque',
                    'TD P Cheque', 'Walmart M Credit Card'];
  expenseTypes = this.types.sort();
  expenseModes = this.modes.sort();
  subscribeRoute: any;

  ngOnInit() {
    this.expense = new Expense();
    this.expense.dateExpensed = new Date(Date.now());
    console.log(this.route.snapshot.params.id);
    // Get the latitude and longitude from the GeoMapping Service

    this.geomap.getLocation(location => {
      if (location) {
        this.expense.address.latitude = location.latitude;
        this.expense.address.longitude = location.longitude;
      }
    });
    // this.subscribeRoute = this.route
    //       .params.subscribe(params => {
    //         console.log(params.id);
    //       })
  }

  // ngOnDestroy() {
  //   this.subscribeRoute.unsubscribe();
  // }

  cancel() {

  }

  submit() {
    // tslint:disable-next-line:no-trailing-whitespace
    
  }

}
