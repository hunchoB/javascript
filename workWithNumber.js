"USE STRICT"


// function readNumber (){
//     let enterNuber;
//     do {
//         enterNuber = prompt ("Enter your number", '');

//     } while( !isFinite(enterNuber) );

//     if ( enterNuber === '' || enterNuber === null){
//         return null;
//     } else {
//         return enterNuber;
//     }
// }


// alert ( readNumber() ) ;
function random (fNumber, sNumber){
return Math.round(Math.random() * ( fNumber- sNumber )) + sNumber;

}

alert ( random(1, 500) );