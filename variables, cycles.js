// First task
/*
for (var count=0, temp="#"; count <7; count++)
{   
    console.log(temp);
    temp= temp+"#";
    
}

*/
// Iteration with condition

for (var number = 1; number <=100; number=number+1) {
    if (number%3==0 && number%5==0)
    console.log("FizzBuzz");
    else
    if (number%5==0)
    console.log("Buzz");
    else
    if (number%3==0) 
    console.log("Fizz");
    else
    console.log(number);
}

 //Simple varian of previous task
 for (var n = 1; n <= 100; n++) {    //We can use let instead of var into this variant
    var output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
  

  //Third task Chess board

  var x,y,desk="";
  for (y=1;y<=8;y++) {
    for (x=1;x<=8;x++){
    if ((x+y)%2==0)
    desk+="#";
    else
    desk+=" ";}
    desk+="\n";
}
console.log(desk);
