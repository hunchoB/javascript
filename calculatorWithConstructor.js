"USE STRICT"

function Calculator (){
    this.firstNumber;
    this.secondNumber;
    this.read = function (){
        firstNumber = prompt('Enter your first number', [0]);
        secondNumber = prompt('Enter your second number', [0]);
    }

    this.sum = function (){
        return (+firstNumber + +secondNumber);
    }

    this.mul = function(){
        return (firstNumber*secondNumber);
    }
}

let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );