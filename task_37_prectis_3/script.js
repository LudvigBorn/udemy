

//let numberOfFilms = 0;
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        do{this.count = +prompt("Сколько фильмов ты посмотрел?", "");
        }while(this.count == null || this.count == '' || isNaN(this.count));
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count <= 10){
            console.log('Посмотрено мало фильмов');
        }else if(personalMovieDB.count <= 30 && this.count >10){
            console.log('Вы классический зритель');
        }else{
            console.log('вы киноман');
        }
    },
    rememberMyFilms: function(){
        for (let i = 0;i < 2;i++) {
            const a = prompt("Один из последних просмотренных фильмов?").trim(),
                  b = prompt("На сколько оцените его?").trim();
            if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log(`a: ${a} ${typeof(a)}, b: ${b} ${typeof(b)}`);
            }else{
                i--;
                console.log(`a: ${a} ${typeof(a)}, b: ${b} ${typeof(b)}`);
            }
        }
    },
    showMyDB: function(){
        if (!this.privat){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        /* for (let i = 0; i < 3;i++){
            const a = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (a === '' || a === null){
                i--;
                continue;
            }
            personalMovieDB.genres[i] = a;
        } */
        for (let i = 0; i < 1;i++){
            const a = prompt(`Вашы любимые жанры через запятую`).toLowerCase();
            if (a === '' || a === null){
                i--;
                continue;
            }
            personalMovieDB.genres = a.split(', ');
            personalMovieDB.genres.sort();
        }

        this.genres.forEach((item,i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    

    toggleVisibleMyDB: function(){
        this.privat = !this.privat;
    }

};


/* 
function start(){
    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "");
    }
}


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
 */

