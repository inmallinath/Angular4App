import { BusinessAddress } from "./BusinessAddress";

export class Expense {
    dateExpensed: Date;
    type: string;
    business: string;
    expense: number;
    notes: string;
    mode: string;
    address: BusinessAddress;

    constructor(DateExpensed: Date, Type: string, Business: string, Expense: number, Notes: string, Mode: string, Address: BusinessAddress){
        this.dateExpensed = DateExpensed,
        this.type = Type,
        this.business = Business,
        this.expense = Expense,
        this.notes = Notes,
        this.mode = Mode,
        this.address = Address
    }
}