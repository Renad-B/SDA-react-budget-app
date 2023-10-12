
import React, { useState, ChangeEvent, FormEvent } from "react";

const TargetForm = () => {
  
// whats the problem with target saving ?
//create use state to store the target to save the amount// 
const[target, setTarget] = useState(0);

const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
  setTarget(Number(event.target.value));
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
    <p>Current Saving: 100</p>
    <p>Target: {target}</p>
    <progress max="100" value={20}/>
  </div>
);
};

export default TargetForm;