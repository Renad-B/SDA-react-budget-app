import React, { useState, ChangeEvent, FormEvent } from "react";

type TargetForm={
savingAmount: number;
};

const TargetForm = ({savingAmount}:TargetForm) => {
const[target, setTarget] = useState(0);
 

 const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
  let targetValue=event.target.value;
   setTarget(Number(targetValue));
 };

 const handleSubmit=(event:FormEvent)=>{
  event.preventDefault();
   setTarget(0);
 };

 return (
   <div>
     <form onSubmit={handleSubmit}>
       <div>
         <label htmlFor="amount">Set target</label>
         <input type="number" name="amount" id="amount" value={target} onChange={handleChange} />
       </div>
       <button>Reset</button>
     </form>
     <p>Current Saving: {savingAmount}</p>
     <p>Target: {target}</p>
     <label htmlFor="progress"> Progress:- {target&&(savingAmount/target)*100}%{""}</label>
     <progress max={target} value={savingAmount}/>
   </div>
 );
 };

export default TargetForm;