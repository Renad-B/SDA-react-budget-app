import React, { useState, ChangeEvent, FormEvent } from "react";
import { ExpenseItem } from "../type";

type TotalExpense={
  getExpense:(amount:number)=>void;
}

const ExpenseForm = ({getExpense}:TotalExpense) => {
  const [expense, setExpense] = useState<ExpenseItem>({
    source: "",
    amount: 0,
    date: "",
  });
 
  const [ExpensesList, setExpensesList] = useState<ExpenseItem[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setExpense((prevIncome) => {
      return { ...prevIncome, [name]: value };
    });
    //console.log(`Updated ${name}: ${value}`);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if(expense.source && expense.amount && expense.date){
      setExpensesList((prevExpenseList) => {
        return [...prevExpenseList, expense];
      });
     getExpense(expense.amount);
    }
  };
  // delete

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Expense source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={expense.source}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount of Expense</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="date">Date of Expense</label>
          <input
            type="date"
            name="date"
            id="date"
            value={expense.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {ExpensesList.length > 0 && ExpensesList.map ((expense,index)=> (
          <li key={index}>
            {expense.source}: {expense.amount} EUR on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpenseForm;