'user strict';

if (4 == 9){
    console.log('ok');
} else {
    console.log('error');
}

const num = 51;
 
/*if( num < 49){
    console,log('Error');
} else if(num > 100){
    console.log('So much');
} else{
    console.log("yes")
}

(num === 50) ? console.log('True') : console.log('Error');*/

switch (num){
    case 49: 
        console.log('false');
        break;
    case 100:
        console.log('false');
        break;
    case 50:
        console.log('true');
        break;
    default:
        console.log('Not now yet');
        break;
}