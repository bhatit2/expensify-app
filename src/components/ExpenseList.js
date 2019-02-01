import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import filteredExpenses from '../selectors/expenses';
import {connect} from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense, index) => (
            <ExpenseListItem key={index} expense={expense}></ExpenseListItem>
        )
      )
    }
    </div>
)

const mapStateToProps = (state)=>({
    expenses : filteredExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);