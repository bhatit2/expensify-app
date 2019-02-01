import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses.js';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log(store);

store.dispatch(addExpense({description : 'water bill', amount : 1000}));
store.dispatch(addExpense({description : 'gas bill', amount : 2000, createdAt: 1000}));
store.dispatch(addExpense({description : 'Rent', amount : 3000}));

store.subscribe(()=>{
    console.log(store.getState());
})
console.log(store.getState());
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx , document.getElementById('app'));