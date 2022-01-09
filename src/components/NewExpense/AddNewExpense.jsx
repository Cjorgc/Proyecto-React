import './ExpenseForm.css'

const AddNewExpense = props => {
    return (
        <div className="new-expense__main">
            <button onClick={props.onAddNewExpense}>Add New Expense</button>
        </div>
    )
}
export default AddNewExpense;