/* function getMathResult(number,iter) {
    let numberArr = '';
    
    if (typeof(iter) === 'number' || iter <= 0){
        return number;
    }
    
    for (let i = 1;i <= iter;i++){
        numberArr += number*i;
        if(i != iter){
            numberArr += '---';
        }
    }
    return numberArr;
}


console.log(getMathResult(4,5)) */

const fruit = 'Siome fruit dsc';
//console.log(fruit.indexOf("fruit"));

const whatever = 'Hello world!';
//console.log(whatever.slice(whatever.indexOf('wor'),whatever.indexOf('!')));

console.log(whatever.substring(10,6));
console.log(whatever.slice(10,6));
console.log(whatever.substr(6,-1));


const numStr = "12.49 px";

//console.log(Math.round(num));

console.log(parseInt(numStr,12));
console.log(parseFloat(numStr));