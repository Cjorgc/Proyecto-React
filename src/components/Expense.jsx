import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "./UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expense(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const changeYearHandler = (event) => {
        console.log('aca')
        setFilteredYear(event.target.value);
        
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter filteredYear={filteredYear} onChangeYear={changeYearHandler}></ExpenseFilter>
                <ExpenseItem item={props.items[0]}></ExpenseItem>
                <ExpenseItem item={props.items[1]}></ExpenseItem>
                <ExpenseItem item={props.items[2]}></ExpenseItem>
                <ExpenseItem item={props.items[3]}></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expense