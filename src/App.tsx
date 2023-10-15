import ExpenseForm from "./Components/ExpenseForm";
import IncomeForm from "./Components/IncomeForm";
import TargetForm from "./Components/TargetForm";
import TransferForm from "./Components/TransferForm";
import React, { useState } from "react";

const App = () => {

  
  const [savingAmount, setSavingAmount] = useState(0);
  const getSavingAmount = (amount: number) => {
    setSavingAmount((preSaving)=>preSaving+amount)
  };

   const[income, setIncome]= useState(0);
   const getIncome=(amount:number)=>{
   setIncome((prevIncome)=>prevIncome+Number(amount));
   };
  
   const[Expense, setExpense]= useState(0);
   const getExspense=(amount:number)=>{
   setExpense((prevExpense)=>prevExpense+Number(amount));
   };
  return (
    <div className="main-div">
      <IncomeForm getIncome={getIncome}/>
      <ExpenseForm getExpense={getExspense}/> 
      <TargetForm savingAmount={savingAmount}/>
      <TransferForm getSavingAmount={getSavingAmount} balance={income-Expense-savingAmount}/>
    </div>
  );
};

export default App;

//Steps:
//1. creat a form.
//2.State for soring data.
//3. handle input changes.
//4.handle form submission
//Done

//Additional requirements:
//1.Calculate the account balance using the formula: income - expense - saving = balance.
//2.mplement a feature to transfer the balance amount to the saving amount.
//3.Calculate the total of the current saving and the percentage of the current saving amount / target of saving.
//4.Add a delete button to remove items in income and expense sources.
