// recursion
// function sumTo(number) {
//     let sum = 0;
//     if (number == 1) {
//         return 1;
//     } else {
//         return sum += number + sumTo(number - 1);
//     }

// }


// //formula
// function sumTo(number) {
//     let start = 1;
//     let end = number;

//     return ( ( (start + end)/2 ) * end );

// }

// function sumTo(number) {
//     let sum = 1;
//     while (number != 1) {
//         sum += number;
//         number -= 1;
//     }
//     return sum;
// }

// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));

// function factorial(number) {
//     let result;
//     if (number == 1) {
//         return 1;
//     } else {
//         return result = number * factorial(number - 1);

//     }

// }
// console.log(factorial(5));

// function fib(n) {
//     let fibSum = 0;
//     let arr = [1, 1];
//     for (let i = 2; i < n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//         fibSum = arr[i];
//     }
//     return fibSum;
// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757


// function printList(list) {

//     console.log(list);
//     if (list.next) {
//         printList(list.next);
//     }

// }


// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// printList(list);

function printObrList(list) {

    
    if (list.next) {
        printObrList(list.next);
    }
    console.log (list.value);

}


let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

printObrList(list);


