// Место для первой задачи
function calculateVolumeAndArea(a) {
    if (typeof(a) === typeof(1) && a%1 === 0 && a > 0){
        return `Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`;
    }
    return 'При вычислении произошла ошибка';
}
console.log(calculateVolumeAndArea(16.6))

function getCoupeNumber(a) {
    if (typeof(a) !== typeof(1) ){
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if(a === 0 || a > 36){
        return "Таких мест в вагоне не существует";
    }
    return parseInt(Math.ceil(a/4)); 
}

