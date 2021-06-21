"USE STRICT"

// function makeCounter() {
//     let count = 0;

//     function counter() {
//         return count++;
//     }

//     counter.set = function (x) {
//         return count = x;
//     }

//     counter.decrease = function () {
//         return count--;
//     }

//     return counter;
// }
// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter());
// counter.set(10); // установить новое значение счётчика
// console.log(counter()); // 10
// counter.decrease(); // уменьшить значение счётчика на 1
// console.log(counter()); // 10 (вместо 11)
function sum() {
    let result;

    function getSum (x){
    result += x;
    return result;
    }
// return getSum;
}

console.log( sum(1) );