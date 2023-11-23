"use strict";

/*Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
P.S. возвращать - это использовать ключевое слово return.
P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.*/


function sayName(name){
    return `Привет, ${name}!`;
}

sayName("Антон");


/*Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].*/

function returnNeighboringNumbers(number){
    return [ number - 1, number, number + 1]
}

returnNeighboringNumbers(7);

/*Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20 */

function getMathResult (nomberOne, nomberTwo){
        if ((typeof(nomberTwo)) !== 'number' || nomberTwo <= 0 ){
           return nomberOne
        } 

        let num = '';
        
        for (let i= 1; i <= nomberTwo; i = i++) {
            if (i === nomberTwo){
                num += `${nomberOne *i}`;
            }else {
                num += `${nomberOne *i} ---`; 
            } 
        } 
        return num; 
}

getMathResult(2,3);
