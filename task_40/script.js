"use strict";

/* let number = 5; debugger

function logNumber() {
    console.log(number); debugger
}

number = 6;

logNumber(); debugger */
/* 
function createCounter(){
    let counter = 0; debugger

    const myFunction = function() {
        counter = counter + 1;debugger
        return counter;debugger
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3)
 */
/* function plusOnez(){
    let m = 0;

    const plusOneContinue = function() {
        m += 1;
        return m;
    };

    return plusOneContinue;
}
const plusOne = plusOnez();
const c1 = plusOne();
const c2 = plusOne();
const c3 = plusOne();
console.log(c1, c2, c3);

 */

/* function foo(a,b) {
    const [,first] = a;
    console.log(first)
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})

console.log(result); */



function logPerson(){
    console.log(`Person: ${this.name}, age: ${this.age}, job: ${this.job}`);
}

const person1 = {name:'Михаил', age:22, job: 'Frontend'};
const person2 = {name:'Елена', age:19, job: 'SMM'};

function bind(context, fn){
    return function(...args) {
        fn.apply(context, args)
    }
}
bind(person1,logPerson)();