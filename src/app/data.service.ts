import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() { }
  

  getList(list: Expense[]) {
    const expenses = [
      new Expense(new Date('10/01/2017'), 'Rent', 'Housing', 1500, 'Towards Rent for October', 'Cash', new BusinessAddress("7920 12th Avenue", "Burnaby", null, null)),
      new Expense(new Date('10/26/2017'), 'Mobile', 'Telecommunication', 87.35, 'Towards Cellular bill', 'Debit', new BusinessAddress("800 Carnarvon St", "New Westminster", null, null))
    ];
    return expenses;
  }
}
