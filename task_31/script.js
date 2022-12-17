/* 
function first(){
    setTimeout(function(){
        console.log('first function is using');
    },500);
}

function second(){
    console.log("second function is using");
}

first();
second(); */

function learnJS(lang, callback){
    console.log(`Я учу язык: ${lang}`);
    callback();
}

function done(){
    console.log("Я выучил");
}

learnJS("javaScript",done);
