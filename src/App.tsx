import ExpenseForm from "./Components/ExpenseForm";
import IncomeForm from "./Components/IncomeForm";
import TargetForm  from "./Components/TargetForm";
import TransferForm from "./Components/TransferForm";

import React, { useState } from "react";

const App = () => {


  return (
    <div className="main-div">
      <IncomeForm  />
      <ExpenseForm />
      <TargetForm />
      <TransferForm />
    </div>
  );
};

export default App;

//Steps:
//1. creat a form. Done 
//2.State for soring data. 
//3. handle input changes. 
//4.handle form submission 