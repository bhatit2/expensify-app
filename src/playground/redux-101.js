import {createStore} from 'redux';
/**Reducers
 * Actions specify  that something happened but dont specify how 
 * the application state changes in response. Its the job of reducers.
 * Reducers are pure functions
 * pure functions are the functions whose output only depends upon the input 
 * and not on any other global paramaters.
 * Also reducers never change state or action.
 */

const countReducer = (state={count : 0}, action)=> {
    switch(action.type){
        case 'INCREMENT': 
        const increment = typeof action.incrementBy == 'number' ? action.incrementBy : 1;
        return {
            count : state.count + increment
        }
        case 'DECREMENT': 
        const decrementBy = typeof action.decrementBy == 'number' ? action.decrementBy : 1;
        return {
            count : state.count - decrementBy 
        }
        case 'RESET' : 
        return {
            count : 0
        }
        case 'SET' : 
        return {
            count : action.count
        };
        default : 
        return state;
    }  
};

const store = createStore(countReducer);
//Actions are objects that get sent to the store. 
//Convention for action names is to use capitalize names.

store.subscribe(()=>{
    console.log(store.getState());
})
//Increment the count

const incrementCount = ({incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy
});

const resetCount = () => ({type : 'RESET'});

const setCount = ({count = 0} = {}) => ({
    type : 'SET',
    count
})

store.dispatch(incrementCount({incrementBy : 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy : 10}));

store.dispatch(setCount({count : 100}));
