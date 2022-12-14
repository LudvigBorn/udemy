/* for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++){
        console.log(j);
    }
} */

/* function makeAsterics(n){
    let result = '';
    for (let i = 1; i < n; i++){
        for (let j = 0; j < i; j++){
            result += '*';
        }
        result += '\n';
    }
    return result;
}

console.log(makeAsterics(7)) */

/*  for(let i = 0;i < 3; i++){
    console.log(`First level: ${i}`)
    for(let j = 0;j < 3; j++){
        console.log(`Second level: ${j}`)
        for(let k = 0;k < 3; k++){
            if(k == 2) break ;
            console.log(`thrid level: ${k}`)
        }
    }
} */

// Место для первой задачи
/* function firstTask() {
    // Пишем решение вот тут
    for (let i = 5;i <= 10; i++){
        console.log(i);
    }
    
    
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20;i >= 10; i--){
        if (i === 13){
            break;
        }
        console.log(i);
    }
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 2;i <= 10; i+=2){
        console.log(i);
    }
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:


function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i <= 16){
        
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
            i++;
        }
    }
}
    
    


// Место для пятой задачи

function fifthTask() {

    const arrayOfNumbers = [];
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i-5] = i;
    }
    return arrayOfNumbers;
}

console.log(fifthTask()); */


// Место для первой задачи
/* function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0;i < arr.length;i++){
        result[i] = arr[i];
    }

    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0;i < data.length;i++){
        if(typeof data[i] === typeof(1) ){
            data[i] *= 2;
        }else{
            data[i] +=  " - done";
        }
    }
    return data;
}



// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 0;i < data.length;i++){
        result[data.length-1-i]=data[i];
    }

    return result;
}
 */

const lines = 5;
let result = '';
let space = '';

for (let i = 0;i <= lines; i++){
    let space = '';
    for (let k = lines;k > i; k--){
        space += ' ';
    }
    result += space;
    for (let j = 0;j <= i*2; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);



// Проверяется именно переменная result, формируйте строку в ней
