import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
    <div>
        This is from expense dashboard page
        <ExpenseListFilters/>
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;