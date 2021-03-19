type Currency = "MXN" | "COP" | "USD";

interface Price {
  number: number;
  currency: Currency;
}

interface ExpenseItem {
  id: number;
  title: string;
  cost: Price;
}

interface IExpenses {
  expenses: ArrayList<ExpenseItem>;
  finalCurrency: Currency;
  add(item: ExpenseItem): boolean;
  get(): ExpenseItem | null;
  getTotla(): string;
  remove(id: number): boolean;
}

class ArrayList<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }
}

class Expenses {
  // constructor(parameters) {}
}
