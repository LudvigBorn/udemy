// Место для первой задачи
function getTimeFromMinutes(time) {
    if(time < 0 || time%1 !== 0 || typeof(time) !== typeof(1)){
        return "Ошибка, проверьте данные"
    }
    let hour = parseInt(time/60);
    let minute = time%60;
    let sayHour = '';
    if (hour == 1){
        sayHour = 'час';
    }else if(hour >= 2 && hour <=4 ){
        //console.log(hour)
        sayHour = 'часa';
    }else{
        sayHour = 'часов';
    }
    return `Это ${hour} ${sayHour} и ${minute} минут`;
}

// Место для второй задачи
function findMaxNumber(a,b,c,d) {
    let max = -10;
    if (arguments.length != 4){
        return 0;
    }

    for (let i = 0;i < arguments.length;i++){
        if(typeof(arguments[i]) !== typeof(1)){
            return 0;
        }
    }

    for (let i = 0;i < arguments.length;i++){
        
        if(max < arguments[i]){
            max = arguments[i];
        }
    }

    return max;
}

//console.log(getTimeFromMinutes(520))
//console.log(findMaxNumber(3,4,44,16));



function fib(n) {
    if (typeof(n) !== typeof(1) || n%1 !== 0 || n < 0){
        return "";
    }
    let arr = [0,1];
    for (let i = 0; i < n-2; i++){
        arr[i+2]=arr[i] + arr[i+1];
    }
    let arr2 = [];
    for (let i = 0;i < n; i++){
        arr2[i] = arr[i];
    }
    return arr2.join(" ");
}

console.log(fib(1));
