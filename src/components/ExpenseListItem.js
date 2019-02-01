import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`}>
            <h3>{props.expense.description}</h3>
        </Link>
        {props.expense.amount}
        {props.expense.createdAt}
    </div>
);

export default ExpenseListItem