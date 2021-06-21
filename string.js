"USE STRICT"

// function ucFirst (str){
    
//     let firstChar;
//     let newStr;
    
//     if (!str){
//         return str;
//     } else {
//     firstChar = str[0].toUpperCase();
//     newStr = firstChar + str.slice(1);

//     return newStr;
//     }
// }

// alert ( ucFirst(""));

// function checkSpam (str){
//     let newStr = str.toLowerCase();
  
//     if ( newStr.includes('viagra') || newStr.includes('xxx') ){
//         return true;    
//     } else{
//         return false;
//     }

// }

// alert ( checkSpam("buy ViAgRA now") );
// alert ( checkSpam("free xxx") );
// alert ( checkSpam("innocent rabbit") );

// function truncate (str, maxleght){
//     let addChar = '...';

//     if (str.length > maxleght){
//         return str.slice(0, maxleght -1) +'…';
//     } else {
//         return str;
//     }


// }

// alert ( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
// alert ( truncate("Всем привет!", 20) );

function extractCurrencyValue(str){

    return +str.slice(1);

}

alert( extractCurrencyValue('$120') );