'use strict';

const str = 'test';
//const arr = [1, 3 , 9];

console.log(str.length);
//console.log(arr.length);

//console.log(str[2]);

//метод изсенения регистра , т.к это метод после его указания обязательно ставятся кавычки

console.log(str.toUpperCase()); // возвращает новое значение и не изменяет исходное. 
console.log(str.toLowerCase()); // Пример выще делает все буквы большими, данный пример делает все буквы маленьким

const fruit = 'Some fruit';

console.log( fruit.indexOf('q'));  // поиск подстроки, если искомый наби объект отсутствует то значение будет -1

const logg = 'hello world';

//console.log(logg.slice(6,11)); // вносим 2 аргумента, 1й - с какой части строки надо вернуть,  - шде заканчиваем, не включая. Можно использоват минус и тогда начинаем с права

console.log(logg.substring(6,11)); // работает так же как и слайс

console.log(logg.substr(6,5)); // вместо конца мы указываем сколько нужно удалить символов

//Для работы с числами, через Math
const num = 12.2;
console.log(Math.round(num)); // округление

const test = '12.2px';
console.log(parseInt(test)); //переводит в другу. систему вычисленийю. Может привести к другому типу 
console.log(parseFloat(test)); // как и предыдущий но при этом выводит с точкой











