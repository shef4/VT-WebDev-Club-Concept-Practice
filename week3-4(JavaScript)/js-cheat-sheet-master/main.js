//var x = 5; old way of creating variables
//let y = 5;  new way
//const z = 5; shouldn't change
const name = 'jake';//string
const age = 15;//number
const isLegal = false;//boolean
const uberRate = 3.3;// number
const x = null; // null
const y = undefined; // undefined
let abc; // undefined
//const z; -> throws error
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLegal);
console.log(typeof uberRate);
console.log(typeof x);
console.log(typeof y);

//string concatenation
console.log("My name is "+name+" and I am "+ age +" years old.");
//String template
console.log(`My name is ${name} and I am ${age} years old.`);
//String operations and properties
const s = "Hello World!";
console.log(`The length of ${s} is ${s.length}.`);
console.log(s.substring(0,5));
let nums = '1,2,3,4,5,6,7,8';
console.log(nums.split(','));

// Arrays
const integers = new Array(1,2,3,4);
console.log(integers)
const fruits = ['apple','bannanas','oranges','Mangos'];((
console.log(fruits);
const mix = ['pie',2,true];
console.log(mix);
console.log(fruits[1]);

//object literals
let person = {
    firstname: Rick,
    lastname: James,
    age: 65,
    hobbies: ['adventures with morty','drinking','science'],
    address: {
        street: '123 main st',
        city: 'new york',
        state: 'Arizona'
    }
}
console.log(person);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address.city);

//for loops
const todos = [
    {
        id: 1,
        text: 'take out the trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'finish hw',
        isCompleted: true
    }
]
for (let i = 0; i > 10;i++){
    console.log(i);
}
for (let i = 0; i > todos.length;i++) {
    console.log(todos[i].text);
}


let counter = 0;
if (counter == 0){
    console.log('counter is 0');
}
if (counter == 1){
    console.log('counter is 1');
}
if (counter >= 12){
    console.log('counter is greater that 12');
}
else{
    console.log('counter is negative');
}

function isEven(x) {
    if (x%2 == 0)
    {
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(5));

const mean = (set) =< {
    let sum = 0;
    for (i = 0; i < set.length; i++){

        sum += set[1];44
    }
}