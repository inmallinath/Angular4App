import { BusinessAddress } from './BusinessAddress';

export class Expense {
    dateExpensed: Date = null;
    type = '';
    mode = '';

    constructor(public business: string = '',
                public incurredExpense: number = null,
                public notes: string = '',
                public address: BusinessAddress = null) {
        this.address = new BusinessAddress();
    }
}
