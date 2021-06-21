"USE STRICT"

function Accumulator (startingValue){
    
    this.value = startingValue;

    this.read = function (){
        this.enterNumber = prompt ('Enter your value', [0]);
        this.value = +this.value + +this.enterNumber;
    }

}

let accumulator = new Accumulator(2);
accumulator.read();
accumulator.read();
alert(accumulator.value);
