import { useState } from 'react';
import AddNewExpense from './AddNewExpense';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const onAddNewExpenseHandler = (event) => {
        setShowForm(true);
    }
    const onCancelNewExpenseHandler = (event) => {
        setShowForm(false);
    }

    const saveExpenseHandler = (newExpenseData) => {
        console.log(newExpenseData);
        const expenseData = {
            ...newExpenseData,
            id: Math.random()
        };
        setShowForm(false);
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            {showForm ? <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={onCancelNewExpenseHandler}/> : <AddNewExpense onAddNewExpense={onAddNewExpenseHandler} />}
        </div>
    )
}

export default NewExpense;