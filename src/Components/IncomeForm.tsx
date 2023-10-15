import React, { ChangeEvent, FormEvent, useState } from "react";
import { IncomeItem } from "../type";

type TotalIncome={
  getIncome:(amount:number)=>void;
};

const IncomeForm = ({getIncome}:TotalIncome) => {
  const [income, setIncome] = useState({
    source: "",
    amount: 0,
    date: "",
  });

  const [IncomesList, setIncomesList] = useState<IncomeItem[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
   const {name, value}=event.target;

   setIncome((prevIncome)=>{
    return{...prevIncome, [name]:value};
   })
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if(income.source && income.amount && income.date){
      setIncomesList((prevIncomes) => {
        return [...prevIncomes, income];
      });

     getIncome(income.amount);
    }
  };

  // delete 
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="source">Income source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={income.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of income</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={income.amount}
            onChange={handleChange}
            required
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
        <button type="submit">Add income</button>
      </form>
      <ul>
      {IncomesList.length > 0 &&
           IncomesList.map((income, index) => (
             <li key={index}>
            {income.source}: {income.amount} EUR on {income.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeForm;