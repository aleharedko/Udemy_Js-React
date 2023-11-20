"use strict"

for (let i = 0; i < 3; i++) { /*подобная запись отображает вложиность циклов. Внегласным правилом является то, что если ксть вложенный 
                                цикл имеен переменую J, а не i, если есть ещё один вложенный цикл, то вместо j будет K*/
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}                   /* Работает следующим образом сначала выполняется 1е условие главного цикла, затем выполняются все условия вложенного 
                    цикла, а затем все действия повторяются: 2е действие главного цикла, затем действия вложенного,
                    3е действие главного, затем все действия вложенного цикла*/
                                        
let result = '';
const length = 7;
for ( let i = 1; i < length; i++) {
    for ( let j = 0; j < i; j++){
    result +='*';
}

    result += '\n'; /* \n - использование переноса строки*/
}

console.log(result);


first: for(i = 0; i < 3; i++){
    console.log('first level: ${i}'); /* ${i} данная запись указывает непосредственно на самy переменную*/
    for (j = 0; j < 3; j++){
        console.log('second level: ${j}');
        for (k = 0; k < 3; k++){
            if (k === 2) break first; /*слово first является меткой, тоесть слово continue прирывает действие цикла 
                                        и переходит к к метке,  данном случае к шлавному циклу*/
            console.log('fhird level: ${k}');    
        }
    }
}



