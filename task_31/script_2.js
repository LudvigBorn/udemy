"use strict";

//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};

const {colors} = options;
console.log(colors.border);
options.makeTest();
//console.log(options["colors"]["bg"]);
//console.log(options.name);
//delete options.name;
/* 
console.log(options);
let counter = 0;
for (let key in options) {
    if (typeof(options[key])=== 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} в ${key}, имеет значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство ${key}, имеет значение ${options[key]}`);
        counter++;
    }
};

console.log(counter); */

console.log(Object.keys(options).length);