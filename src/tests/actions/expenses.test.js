import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('shoule setup remove action expense object', () => {
    const removeExpenseObj = removeExpense({id : '1wessw'});
    expect(removeExpenseObj).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '1wessw'
    });
})

test('should setup edit action expense object', () => {
    const editExpenseObj = editExpense('1wessw', {description: "expense1"});
    expect(editExpenseObj).toEqual({
        type : 'EDIT_EXPENSE',
        id : '1wessw',
        updates : {description: "expense1"}
    });
})

test('should setup add action expense object with default values', () =>{
    const addExpenseObj = addExpense({});
    expect(addExpenseObj).toEqual({
            type : 'ADD_EXPENSE',
            expense : {
                description: '',
                note : '',
                amount : 0,
                createdAt : 0,
                id : addExpenseObj.expense.id
            }
    })
})

test('should setup add action expense object with provided values', ()=>{
    const expenseData = {
        description: 'My added description',
        note : 'this was test note',
        amount : 100,
        createdAt : 2000,
    };
    const addExpenseObj = addExpense(expenseData);
    expect(addExpenseObj).toEqual({
            type : 'ADD_EXPENSE',
            expense : {
                ...expenseData,
                id : addExpenseObj.expense.id
            }
    })
})