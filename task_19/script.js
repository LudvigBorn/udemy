//task_1

const numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB.count);

/* let filmName = window.prompt("Один из последних просмотренных фильмов?");
let score = window.prompt("На сколько оцените его?"); */


const lastFilm1 = prompt("Один из последних просмотренных фильмов?"),
      lastFilmScore1 = +prompt("На сколько оцените его?"),
      lastFilm2 = prompt("Один из последних просмотренных фильмов?"),
      lastFilmScore2 = +prompt("На сколько оцените его?");

personalMovieDB.movies[lastFilm1] = lastFilmScore1;
personalMovieDB.movies[lastFilm2] = lastFilmScore2;

console.log(personalMovieDB);

