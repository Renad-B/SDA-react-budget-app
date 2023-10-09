const TransferForm=()=>{
    return(
        <div>
            <h3>Current Balance: 5930</h3>
        <form>
          <div>
            <label htmlFor="amount">Transfer to saving account</label>
            <input type="number" name="amount" id="amount" />
          </div>
          <button>Transfer</button>
        </form>
      </div>
    );
};

export default TransferForm;