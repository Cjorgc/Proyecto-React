import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "./Card";

function Expense(props){


    return (
        <Card className="expenses">
            <ExpenseItem item={props.items[0]}></ExpenseItem>
            <ExpenseItem item={props.items[1]}></ExpenseItem>
            <ExpenseItem item={props.items[2]}></ExpenseItem>
            <ExpenseItem item={props.items[3]}></ExpenseItem>
        </Card>
    );
}

export default Expense