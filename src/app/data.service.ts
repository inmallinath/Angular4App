import { Injectable } from '@angular/core';
import { Expense } from './entity/Expense';
import { BusinessAddress } from './entity/BusinessAddress';

@Injectable()
export class DataService {
  constructor() { }

  getList(expenseList) {
    const expenses = [
      // tslint:disable-next-line:max-line-length
      new Expense('House Landlord', 1500, 'Towards Rent for October', new BusinessAddress('7920 12th Avenue', 'Burnaby', null, null)),
      new Expense('Fido Telecommunications', 87.35, 'Towards Cellular bill', new BusinessAddress('800 Carnarvon St', 'New Westminster', null, null))
    ];
    expenseList(expenses);
  }
}
