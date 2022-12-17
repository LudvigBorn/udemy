const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string'){
        return "Ошибка!";
    }
    let str2 = '';
    for (let i = str.length-1;i >= 0;i--){
        str2 += (str[i]);
    }
    return str2;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const missingCurr = ["CNY"];

const arr = [...baseCurrencies,...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0){
        return "Нет доступных валют";
    }
    let array = [];
    for (let key of arr){
        if (key !== missingCurr){
            array.push(key);
        }
    }
    let str = `Доступные валюты:\n${array.join('\n')}`;
    return str;
}
console.log(availableCurr(arr,missingCurr));


