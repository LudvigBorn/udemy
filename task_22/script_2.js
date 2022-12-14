//task_1

let numberOfFilms = 0;

//while(!numberOfFilms){
numberOfFilms = valifator(+prompt("Сколько фильмов ты посмотрел?", ""));


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count <= 10){
    console.log('Посмотрено мало фильмов');
}else if(10 < personalMovieDB.count <= 30){
    console.log('Вы классический зритель');
}else{
    console.log('вы киноман');
}

/* let filmName = window.prompt("Один из последних просмотренных фильмов?");
let score = window.prompt("На сколько оцените его?"); */

/* //Работающий код
let arr = [];
for (let i = 0;i < 2;i++) {
    while(!arr[i]){
        arr[i] = valifator(prompt("Один из последних просмотренных фильмов?"));
    }
    while(!personalMovieDB.movies[arr[i]]){
        personalMovieDB.movies[arr[i]]= valifator(prompt("На сколько оцените его?"));
    }
} */

/* //Работает через while
let arr = [];
let ing = 0;
while (ing < 2) {
    while(!arr[ing]){
        arr[ing] = valifator(prompt("Один из последних просмотренных фильмов?"));
    }
    while(!personalMovieDB.movies[arr[ing]]){
        personalMovieDB.movies[arr[ing]]= valifator(prompt("На сколько оцените его?"));
    }
    ing++;
} */

/* //не работает через do while
//let arr = [];
let ing = 0;
 do{
    while(!a){
        consta = valifator(prompt("Один из последних просмотренных фильмов?"));
    }
    while(!b){
        b= valifator(prompt("На сколько оцените его?"));
    }
    personalMovieDB.movies[a]=b;
    ing++;
}while (ing < 2) */

for (let i = 0;i < 2;i++) {
    console.log(`start: ` + i)
    const a = prompt("Один из последних просмотренных фильмов?"),
          b = prompt("На сколько оцените его?");
    if(a != null && b != null && a != '' && b != '' && a < 50){
        personalMovieDB.movies[a] = b;
    }else{
        i--;
    }
    console.log(`last: ` + i)
}

/* const lastFilm1 = prompt("Один из последних просмотренных фильмов?"),
      lastFilmScore1 = +prompt("На сколько оцените его?"),
      lastFilm2 = prompt("Один из последних просмотренных фильмов?"),
      lastFilmScore2 = +prompt("На сколько оцените его?"); */

/* personalMovieDB.movies[lastFilm1] = lastFilmScore1;
personalMovieDB.movies[lastFilm2] = lastFilmScore2; */

console.log(personalMovieDB);
function valifator(bool){
/*     if (bool.length > 50 || bool === ""){
        return false
    } */return bool
}
