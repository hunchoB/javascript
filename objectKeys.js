"USE STRICT"

// function sumSalaries(sal) {
//     let result = 0;

//     if (Object.keys(sal).length == 0) {
//         return 0;
//     } else {
//         for (let salary of Object.values(sal)) {
//             result += salary;
//         }
//     }
//     return result;
// }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// console.log(sumSalaries(salaries));

function count(countProperties){
    return Object.keys(countProperties).length;

}

let user = {
    name: 'John',
    age: 30
};

console.log(count(user)); // 2