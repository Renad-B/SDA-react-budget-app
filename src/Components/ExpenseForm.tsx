//Same as income 

import React, { useState, ChangeEvent, FormEvent } from "react";

type ExpenseType= {
  source: string;
  amount: number;
  date: string;
}

const ExpenseForm = () => {
  const [expense, setExpense] = useState<ExpenseType>({
    source: "",
    amount: 0,
    date: "",
  });

 /// fix this one 
  const [Expenses, setExpenses] = useState<ExpenseType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    setExpense((prevIncome) => {
      return { ...prevIncome, [name]: value };
    });
    console.log(`Updated ${name}: ${value}`);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //console.log(Expense);
    setExpenses((prevExpenses)=>{
      return [...prevExpenses,expense];
    });
    // Reset the Expense form fields after submission
    setExpense({ source: "", amount: 0, date: "" }); 
    console.log("Submitted Income:", Expenses);
  };
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
            value={expense.amount.toString()}
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
        {Expenses.map((expense, index) => (
          <li key={index}>
            {expense.source}: {expense.amount} EUR on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExpenseForm;
