"use strict";

const arr = [13,20,23,16,38];

//arr.pop();
arr.push(10);

console.log(arr);

arr.forEach(function(item, i,arr){
    console.log(`Число: ${item} порядок ${i} массив${arr}`);
});

for (let value of arr) {
    console.log(value);
}

//const str = prompt("","");
//const products = str.split(", ");
//console.log(products.join("; "));
console.log(arr.sort(compareNum));

function compareNum(a, b) {
    return a - b;
}