/*first task*/
function firstTask() {
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for(i = 0; i = arr.length; i++){
    result[i] = arr [i];
}
console.log(result)
return result
}

/*second task*/
Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, 'Shopping', 20, 'Homework'];

for(let i = 0; i < data.length; i++){
    if( typeof (data[i]) === 'number'){
        data[i] = data[i] * 2;
    } else if ( typeof(data[i]) === 'String') {
        data[i]= 'done';
    }
}

console.log(data)
    

Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
    // Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i]
    }
}
console.log(result);


//построение фигур
const lines = 5;
let result = '';

for (let i = 0; i <= lines ; i++) {
    for (let j = 0; j < lines - i; j++){
        result += " ";
    }
    for(let j = 0; j < 2*i+1; j++){
        result += "*";
    }
    result += "\n";
}

console.log(result);

