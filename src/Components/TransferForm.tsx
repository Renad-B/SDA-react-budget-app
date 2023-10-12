import React, {useState, ChangeEvent, FormEvent} from "react";
// same logic 

const TransferForm=()=>{

  const[transfer, setTransfer] = useState(0);

  const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
    setTransfer(Number(event.target.value));
  };

  const handleSubmit=(event:FormEvent)=>{
    event.preventDefault();
    console.log(transfer);
    setTransfer(0);
  };
  
    return(
        <div>
            <h3>Current Balance: 0</h3>
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