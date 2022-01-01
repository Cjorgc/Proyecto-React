import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

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

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='text' min="0.01" step="0.01"></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31"></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;     