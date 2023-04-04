'use strict';

if(4 == 49) {  /* данное условие в консоль ничего не выведет т.к. 49 не равно 4, а при невеном значение не указанно действие*/
    console.log('ok');
}

if(4 == 4) { /* данное действие выведет в консольь ок т.к. оно верное*/
    console.log('ok');
}

if(4 == 49) { 
    console.log('ok');
} else {
    console.log('error');
}



const number = 50;

if (number < 49) {
    console.log('error');
} else if (number > 100) {
    console.log('so much');
} else {
    console.log('great');
}

(number === 50) ? console.log('ok') : console.log('error');

const num = 1995;

switch (num) { /* конструкция swith всегда проводится как строгое спавнение*/
    case 49: console.log('error'); /*case - это условие, которые проверяютмся*/
    break;/* после каждого case необходимо указывать break*/
    case 1990: console.log('no eat');
    break;
    case 1994: console.log('its my date birthday');
    break;
    default: console.log('not today'); /*default - значение которое указывается при всех отрицательных значениях*/
    break;
}