'use strict';

const numberOfFilms = +prompt('Сколько фильмов ты посмотрел?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for( let i = 0; i < 2; i++ ){
    const a = prompt('Один из последних просмотренных фильмов?', ' '),
          b = prompt('На сколько оцените его?', ' ');
    if ( a != null && b != null && a != "" && b != "" && a.length < 50){
         personalMovieDB.movies[a] = b;
         console.log('done');
    } else {
        console.log('error');
        i--
    }
 
}

if(personalMovieDB.count < 10){
    console.log("dsad");
} else if (personalMovieDB.count >= 10 && personalMovieDB.coun < 30 ) {
    console.log("dsaswqeqeqweqd");
} else if (personalMovieDB.count >= 30){
    console.log("dsaddadqwqeqeqeqeqeqeq");
} else {
    console.log("error");
}

console.log(personalMovieDB);