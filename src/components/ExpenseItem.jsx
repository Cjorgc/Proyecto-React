import Card from './UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem (props){
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.item.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.item.title}</h2>
                <div className='expense-item__price'>{props.item.amount}</div>
            </div>
            <button>Button</button>
        </Card>

    );
}

export default ExpenseItem