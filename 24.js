'use strict';

const numberOfFilms = +prompt('Сколько фильмов ты посмотрел?',''); // + - перед promt, обозначает что ответ будет приобретать числовое значение

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for( let i = 0; i < 2; i++ ){ // i < 0 обозначает, что цикл будет идти 2 раза, т.к. 0 меньше 2 - первое исполнение, 1 меньге 2 - второе исполнение
    const a = prompt('Один из последних просмотренных фильмов?', ' '), // а и b это две переменные с вопросом
          b = prompt('На сколько оцените его?', ' ');
    if ( a != null && b != null && a != "" && b != "" && a.length < 50){  //условие что если в а и b не пустые и меньше чем 50 символов в personalMovieDB.movies будет 2 повторения вопросов
         personalMovieDB.movies[a] = b;
         console.log('done'); //и выводится ответ дон
    } else {
        console.log('error'); // всех остольных случаях цил возвращается на одну итерацию и повторяется, но выдат ошибку 
        i--
    }
 
}

if(personalMovieDB.count < 10){   // задействонно колличество букв при числе меньше десяти один ответ
    console.log("dsad");
} else if (personalMovieDB.count >= 10 && personalMovieDB.coun < 30 ) { // от 10 до 30 второй ответ
    console.log("dsaswqeqeqweqd");
} else if (personalMovieDB.count >= 30){ // всё чир больше 30й ответ, но нужно учитывать,что a.length < 50, если будет больше то просто напишет эрор
    console.log("dsaddadqwqeqeqeqeqeqeq");
} else {
    console.log("error");
}

console.log(personalMovieDB);