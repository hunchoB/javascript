"USE STRICT"
// function printNumber(from, to) {

//     let currentNumber = from;

//     let timerId = setInterval(function () {
//         alert(currentNumber);
//         if (currentNumber == to) {
//             clearTimeout(timerId);
//         }
//         currentNumber++;
//     }, 1000);
// }

function printNumber(from, to) {

    let currentNumber = from;

    function again() {
        alert(currentNumber);
        if (currentNumber < to) {
            timerId = setTimeout(again, 1000);
        }
        currentNumber++;
    }

    again();
}

printNumber(5, 10);