let numberOfFilms = 0;

function start(){
    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
    }
}

//start(); 


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel(){
    if (personalMovieDB.count <= 10){
        console.log('Посмотрено мало фильмов');
    }else if(10 < personalMovieDB.count <= 30){
        console.log('Вы классический зритель');
    }else{
        console.log('вы киноман');
    }
}

function rememberMyFilms(){
    for (let i = 0;i < 2;i++) {
        console.log(`start: ` + i)
        const a = prompt("Один из последних просмотренных фильмов?").trim(),
              b = prompt("На сколько оцените его?").trim();
        if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log(`a: ${a} ${typeof(a)}, b: ${b} ${typeof(b)}`);
        }else{
            i--;
            console.log(`a: ${a} ${typeof(a)}, b: ${b} ${typeof(b)}`);
        }
        console.log(`last: ` + i)
    }
}


function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for (let i = 1; i <= 3;i++){
        const a = prompt(`Ващ любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = a;
    }
}

writeYourGenres();
