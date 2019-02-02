import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type : '@@INIT'});
    expect(state).toEqual([]);
})

test('should add an expense', ()=>{
    const expense = {
        description :'test expense',
        note : 'test',
        amount : 0,
        createdAt : 0
    };
    const action = {
        type : 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses , expense]);
})

test('should remove expense with valid id', ()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove any expense if id is not defined', ()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id : undefined
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should edit expense with valid id', ()=>{
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[1].id,
        updates : {
            note : 'Note updated'
        }
    }
    const state = expensesReducer(expenses, action);
    const updatedItem = state.find(item => item.id == action.id);
    expect(updatedItem.note).toEqual('Note updated');
})

test('should not edit expense with invalid id', ()=>{
    const action = {
        type : 'EDIT_EXPENSE',
        id : undefined,
        updates : {
            note : 'Note updated'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})