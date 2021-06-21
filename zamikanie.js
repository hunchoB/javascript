"USE STRICT"

// function inBetween( a , b ) {
//     return function (x){

//         return x > a && x <b; 
//     }
// }

// function inArray( arr ) {
//    return function (x){
//        return arr.includes(x);
//    }
// }



// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) );
// console.log( arr.filter(inArray([1, 2, 10])) );
// function  byField( key ){
//     return (a, b) => a[key] > b[key] ? 1 : -1;
// }


// let users = [{
//         name: "John",
//         age: 20,
//         surname: "Johnson"
//     },
//     {
//         name: "Pete",
//         age: 18,
//         surname: "Peterson"
//     },
//     {
//         name: "Ann",
//         age: 19,
//         surname: "Hathaway"
//     }
// ];


// console.log( users.sort(byField('name')));
// console.log( users.sort(byField('age')));


function makeArmy() {
    let shooters = [];

    let i = 0;
    while ( i < 10) {
        let shooter = function () { // функция shooter
            console.log(i); // должна выводить порядковый номер
        }();
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

console.log(army[0]()); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...