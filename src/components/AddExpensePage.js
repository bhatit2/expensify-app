import React from 'react';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses.js';
import {connect} from 'react-redux';

const AddExpensePage = (props) => (
    <div>
        <h2>Add Expense</h2>
        <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }}
        />
    </div>
);

export default connect()(AddExpensePage);