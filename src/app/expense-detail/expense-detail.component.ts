import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  //Another way to get params is to declare a var
  //that would then subscribe to the router params
  //to get the parameter value (other commented code)
  subscribeRoute: any;

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    // this.subscribeRoute = this.route
    //       .params.subscribe(params => {
    //         console.log(params.id);
    //       })
  }

  // ngOnDestroy() {
  //   this.subscribeRoute.unsubscribe();
  // }

}
