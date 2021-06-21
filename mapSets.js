"USE STRICT"
// Create uniq values array
// function unique(arr) {

//     return Array.from( new Set(arr) );
//   }

//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];

//   console.log( unique(values) );

// Work with anagramms
// function aclean(arr) {
//     let delimArray;
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         delimArray = arr[i].toLowerCase().split('').sort().join('');
//         map.set(delimArray, arr[i]);
//         // console.log ( map );
//     }

//     return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));

let map = new Map();

map.set("name", "John");


let keys = Array.from( map.keys() );


// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
keys.push("more");
console.log(keys);