import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [insertedTitle, setInsertedTitle] = useState('');
    const [insertedAmount, setInsertedAmount] = useState(0);
    const [insertedDate, setInsertedDate] = useState(new Date());


    const dateChangeHandler = (event) => {
        setInsertedDate(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setInsertedAmount(event.target.value);
    }
    const titleChangeHandler = (event) => {
        setInsertedTitle(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: insertedTitle,
            amount: insertedAmount,
            date: new Date(insertedDate)
        }
        // console.log(expenseData);
        props.onSaveExpense(expenseData);
        setInsertedTitle('');
        setInsertedAmount('');
        setInsertedDate('')

    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={insertedTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='text' min="0.01" step="0.01" value={insertedAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={insertedDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
                
            </div>
        </form>
    )
}

export default ExpenseForm;     