import moment from 'moment';

const expenses = [{
    id : 1,
    description : 'Rent',
    note : '',
    amount : 12000,
    createdAt : moment(0).subtract(4, 'days').valueOf()
},{
    id : 2,
    description : 'Shopping',
    note : '',
    amount : 5000,
    createdAt : moment(0).add(4, 'days').valueOf()
},{
    id : 3,
    description : 'Trip',
    note : '',
    amount : 10000,
    createdAt : 0
}];

export default expenses;