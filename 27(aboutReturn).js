'use strict';

const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr){  
   return curr * amount;  //благодаря этому выводит результат
}

function promotion(result){
    console.log(result * discount);
}


const res = convert(22, eurCurr)        // такой эе результат как и нижний, но с объявлением дополнительной переменной
promotion(res);
// promotion(convert(22, eurCurr));  // вызов функции внутри второй функции

function test(){
    for(let i = 0; i < 5; i++){
        console.log(i);
        if(i === 3 ) return
    }
    console.log('done');
}
test();


function doNotNothing( ) {};
console.log(doNotNothing) === undefined;