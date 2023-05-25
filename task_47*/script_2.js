/* function factorial(n) {
    if ( n%1!== 0 || typeof(n) !== 'number' ){
        return 1;
    }
    if(n==1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
} */
function factorial(n) {
    if ( n%1 !== 0 ){
        return 1;
    }
    if(n==1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
console.log(factorial(4.5));