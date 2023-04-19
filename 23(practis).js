'use strict'
/*first task*/
function firstTask() {
    let num = 5
    while(num <=10){
        console.log(num);
        num++
    }
}

/*second task*/

for (let i = 20; i >= 10; i--){
    console.log(i);
    if(i===13){
        break
    }
}

/*thirdTask*/

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

/*fourth task*/

let numFourthTask = 2;
do{
    numFourthTask++
    if (numFourthTask % 2 === 0) {
        continue;
    } else {
        console.log(numFourthTask);
    }
}
while (numFourthTask <= 15);



for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


const arrayOfNumbers = [];

    for(let i = 5; i <=10; i++){
        arrayOfNumbers.push(i);
    }
    console.log(arrayOfNumbers);
    
    // Не трогаем
    return arrayOfNumbers;