// Done, but te console why it keeps updating !!

import React, { ChangeEvent, FormEvent, useState } from "react";

type IncomeType = {
  source: string;
  amount: number;
  date: string;
};

const IncomeForm = () => {
  const [income, setIncome] = useState<IncomeType>({
    source: "",
    amount: 0,
    date: "",
  });

  const [incomes, setIncomes] = useState<IncomeType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    //setIncome({...income,[name]:value})

    setIncome((prevIncome) => {
      return { ...prevIncome, [name]: value };
    });
    console.log(`Updated ${name}: ${value}`);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //console.log(income);
    setIncomes((prevIncomes)=>{
      return [...prevIncomes,income];
    });
    // Reset the income form fields after submission
    setIncome({ source: "", amount: 0, date: "" }); 
    console.log("Submitted Income:", income);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Income sourse</label>
          <input
            type="text"
            name="source"
            id="source"
            value={income.source}
            onChange={handleChange}required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of income</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={income.amount}
            onChange={handleChange}required
          />
        </div>
        <div>
          <label htmlFor="date">Date of income</label>
          <input
            type="date"
            name="date"
            id="date"
            value={income.date}
            onChange={handleChange}
          />
        </div>
        <button>Add income</button>
      </form>
      <ul>
        {incomes.map((income, index) => (
          <li key={index}>
            {income.source}: {income.amount} EUR on {income.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeForm;
