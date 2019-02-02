import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type : '@@INIT'});
    expect(state).toEqual({
        text : '',
        sortBy : 'date', //date or amount
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    })
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type : 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
    const currentState = {
        text : '',
        sortBy : 'amount', //date or amount
        startDate : undefined,
        endDate : undefined
    }
    const action = {type : 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = {
        type : 'SET_TEXT_FILTER',
        text : 'ol'    
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('ol');
})

test('should set start date filter', () => {
    const action = {
        type : 'SET_START_DATE',
        startDate : moment(0)    
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
})

test('should set start date filter', () => {
    const action = {
        type : 'SET_END_DATE',
        endDate : moment(0)    
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
})