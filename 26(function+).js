'use strict';

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr){  // для большего удобства переменные лучше использовать через аргументы функций
    console.log(curr * amount );
}

convert(22, usdCurr); // значение мы подставляем именно в момент вызова
convert(22, eurCurr);