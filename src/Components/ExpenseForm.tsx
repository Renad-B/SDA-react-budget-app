const ExpenseForm = () => {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="source">Expense source</label>
            <input type="text" name="source" id="source" />
          </div>
          <div>
            <label htmlFor="amount">Amount of Expense</label>
            <input type="number" name="amount" id="amount" />
          </div>
          <div>
            <label htmlFor="date">Date of Expense</label>
            <input type="date" name="source" id="date" />
          </div>
          <button>Add Expense</button>
        </form>
        <ul>
          <li>Water bill: 50 EUR on Tue Oct 04 2022</li>
        </ul>
        <ul>
          <li>Phone bill: 20 EUR on Fri Sep 23 2022</li>
        </ul>
      </div>
    );
  };
  
  export default ExpenseForm;
  