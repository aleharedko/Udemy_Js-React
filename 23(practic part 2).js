/*first task*/

const arr = [3, 5, 8, 16, 20, 23, 50];

/*first task*/
const result = [];

for( let i = 0; i < arr.length; i++){
    result[i] = arr[i];
    console.log(result);
}


function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    return result;
}

/*second task*/

const data = [5, 10, 'Shopping', 20, 'Homework'];

    for(let i = 0; i < data.length; i++){
        if( typeof data[i] === 'number'){
            data[i] = data[i] * 2;
        } else if (typeof data[i] === 'string'){
            data[i] = data[i] + ' - done';
        }
        console.log(data);
    }
    
    