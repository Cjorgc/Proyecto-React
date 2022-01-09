import './Expense.css';
import Card from "../UI/Card.jsx";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expense(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const changeYearHandler = (event) => {
        console.log('aca')
        setFilteredYear(event.target.value);
        
    }
    let filteredItemsByYear = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear)
    
    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter filteredYear={filteredYear} onChangeYear={changeYearHandler}></ExpenseFilter>
                <ExpenseList items={filteredItemsByYear}></ExpenseList>
            </Card>
        </div>
    );
}

export default Expense