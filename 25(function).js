// Стрелочные функции

"use strict";
let num  = 20; 
let cat = 22;

function showFirsMesage (text){  // function - ключевое слово объявляющее о том, что это функция, далее идёт имя. Аргументы этотто что будет использоваться внутки функции
                             //круглых скобках запичываем аргументы, в фигурных необходимое действие
                             //Важно!!! Имя функции долэно включать глагол
    console.log(text);
    let num = 10;  //объявлена локально, но если бы была без let испольщовалась бы для вывода информации 
    console.log(num);
    console.log(cat); //т.к. в функции нет такой переменной, она начинает рассматривать переменные на уровень выше. Замыкание функция - это функция со всеми доступными ей переменными


}

showFirsMesage('hello world');  // вызов функции
console.log(num); //если переменная объявлена в нутри функции, то с наружи рна не видна

function calculateNumb (a, b){
    return(a + b);  // используется как окончание функции и возвращение функции на ружу
    console.log('dfs'); //если после ретёрн будет написан код, то он уже выполняться не будет и называется анличибл
}

//console.log(calculateNumb(2, 3));
//console.log(calculateNumb(5, 3));
//console.log(calculateNumb(4, 8));

function ret (){   //подобный вид записи называется фанкшен диклорещен
    let num = 50;
    return num;  //подобным образом можно выводить действия из функции
}

const anotherNum = ret();  
console.log(anotherNum);

const logger = function(){   // Называется фанкщен экспрешен, в конце нужно ставить токчку!
    console.log('hello')
};

logger();  // функци. можно выхвать только после её объявления


const calc = (a, b) => {return a + b} ; // стрелочная функция, не имеет контекста вызова. если только 2 аргументаможно бещ ретёрт и фигурных скобок