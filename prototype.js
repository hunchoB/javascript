"USE STRICT"

// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head,
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);

// let hamster = {


//     eat(food) {
//         this.stomach.push(food);
//     }
// };

// let speedy = {
//     stomach: [],
//     __proto__: hamster
// };

// let lazy = {
//     stomach: [],
//     __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple

function obj (){

}

let obj1 = new obj();
let obj2 = new obj1.constructor();

console.log(obj2.constructor == obj);