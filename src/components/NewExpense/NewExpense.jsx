import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseHandler = (newExpenseData) => {
        console.log(newExpenseData);
        const expenseData = {
            ... newExpenseData,
            id: Math.random()
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense;