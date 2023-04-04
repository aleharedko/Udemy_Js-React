'use strict';

const numberOfFilms = prompt('Сколько фильмов ты посмотрел?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lostFilm = prompt('Один из просмотренных фильмов?','');

let filmScore = prompt('какая оценка?','');

personalMovieDB.movies[lostFilm]=filmScore;

console.log(personalMovieDB);