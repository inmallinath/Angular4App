import { Injectable } from '@angular/core';
import { Expense } from './entity/Expense';
import { BusinessAddress } from './entity/BusinessAddress';

@Injectable()
export class DataService {
  constructor() { }
  

  getList(expenseList) {
    const expenses = [
      new Expense(new Date('10/01/2017'), 'Rent', 'Housing', 1500, 'Towards Rent for October', 'Cash', new BusinessAddress("7920 12th Avenue", "Burnaby", null, null)),
      new Expense(new Date('10/26/2017'), 'Mobile', 'Telecommunication', 87.35, 'Towards Cellular bill', 'Debit', new BusinessAddress("800 Carnarvon St", "New Westminster", null, null))
    ];
    expenseList(expenses);
  }
}
