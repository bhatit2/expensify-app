const book = {
    title : "Ego is the Enemy",
    author : 'Ryan Holiday',
    publisher :{
        name : 'Penguin'
    }
}

const { name : publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

const person = {
    name : 'Tanvi',
    age : 28,
    location : {
        city : 'Hyderabad',
        temp : 22
    }
}

const {name : name1 = 'Anonymous', age} = person;
console.log(`${name1} is ${age}`);

const {city , temp : temperature} = person.location;
console.log(`Its ${temperature} in ${city}`);


/* Array destructuring */

const address = ['kv', 'Hyderabad', 'Telangana', '500032'];
const [, place, state] = address;
console.log(`You are in ${place} ${state}`);

const item = ['Coffee (hot)', '60' , '70' , '80'];
const [drink, , price] = item;
console.log(`A ${drink} costs ${price}`);
