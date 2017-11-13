import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Expense } from '../entity/Expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  expenseList: [Expense];

  ngOnInit() {
    this.dataService.getList(list => {
      this.expenseList = list;
    });
  }

}
