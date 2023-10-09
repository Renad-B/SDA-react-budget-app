import ExpenseForm from "./Components/ExpenseForm";
import IncomeForm from "./Components/IncomeForm";
import TarForm from "./Components/TarForm";
import TransferForm from "./Components/TransferForm";

const App=()=>{
    return(
    <div>
        <IncomeForm/>
        <ExpenseForm/>
        <TarForm/>
        <TransferForm/>
        </div>
    )
}

export default App;