import { type } from "os";
import React, {useState, ChangeEvent, FormEvent} from "react";
 // same logic

 type TransferFormProps={
  getSavingAmount:(amount:number)=>void;
  balance:number;
 }

 const TransferForm=({getSavingAmount,balance}:TransferFormProps)=>{

  const[transfer, setTransfer] = useState(0);
  
   const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
     setTransfer(Number(event.target.value));
   };
   
   const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    
    transfer <= balance? getSavingAmount(transfer):alert("Transfer amount cant be more thant cuurent balance");
    //printing 
    setTransfer(0);
  };

     return(
         <div>
             <h3>Current Balance: {balance}</h3>
         <form onSubmit={handleSubmit}>
           <div>
             <label htmlFor="amount">Transfer to saving account</label>
             <input type="number" name="amount" id="amount" value={transfer} onChange={handleChange}/>
           </div>
           <button>Transfer</button>
         </form>
       </div>
     );
   };

 export default TransferForm;