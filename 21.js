'user strict';

const hamburger = true;
const fries = true;

if(hamburger && fries){
   console.log('I eat much food'); 
}

console.log((hamburger && fries));

/* при подобной записи, как с верху, код возвращает ПРАВДА, т.к. потому что обе переменных правдивы и выполняется код блока if 
&& - логический оператор И  работает если все значения возвращают ПРВДА, 
если хотябы один из операндов возвращает лож, то программа останавливается и возвращается 
значение НЕППРАВДА, если все значения верны, то код продолжается, либо возвращается 
последнее ПРАВДИВОЕ значение*/

const hamburgeR = true;
const frieS = false;

if(hamburgeR && frieS){
   console.log('I eat much food'); 
}

console.log((hamburgeR && frieS))

/* код блока if не выполняется, т.к. одина из переменых имеет неверное значение, последний консол лог выводит false*/

const hamburgER = 5;
const friES = 0 ;

if(hamburgER && friES){
   console.log('I eat much food'); 
}

console.log((hamburgER && friES));

/* блок if выполняться не будет, т.к. числовое значение 0 - пеобразуется в false(линамическая типизация данных), а последний console.log возвращает 0*/

const hamburGER = 3;
const frIES = 1 ;
const cola = 0;

console.log((hamburGER === 3 && cola && frIES));

if(hamburGER === 3 && cola === 1 && frIES === 1){
   console.log('all done'); 
} else{
    console.log('we get out');
}

/*Логические операторы возвращают значение, если есть конкретные значения как в примере выше,
то значение с НЕПРАВДА будет выводится в консоль, на примере выще вернется
значение переиенной cola --- 0*/ 

const snikers = 0;
const bounti = 0;
const mars = 0;

if(snikers || bounti || mars ){
   console.log('all done'); 
} else{
    console.log('we get out');
}


/* как только оператор ИЛИ находит правду , код прекращается, не учитывая дальнейщего кода.
Если всё неправда, то возвращается последнее ложное значение*/

let jonReport, alexReport, samReport, mariReport = 'done';

console.log(jonReport || alexReport || samReport || mariReport);

/*Подобным кодом мы проверили, что хотябы одна переменная верна*/


const snikers = 3;
const bounti = 3;
const mars = 0;
const milkiWay = 2;

if(snikers === 2 && mars === 1 || bounti === 3 && milkiWay ){
   console.log('all done'); 
} else{
    console.log('we get out');
}

console.log( bounti === 3 && milkiWay)

