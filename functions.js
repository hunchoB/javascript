function min ( a, b){
    let a,b;
if (a > b)
return b;
else
return a;
}
console.log(min(-1111,-110));

// recursion

function isEven (a){
if (a == 0) return true;
else
if (a == 1) return false;
else
if (a < 0) return isEven(-a);
else
return isEven(a-2);
}

console.log(isEven(-22));


//Count of beans
//This function is searching the specific character in the string
function countChar (string, search_char){
let count=0;
    for (let i=0; i <= string.length-1; i++){
        if (string.charAt(i) == search_char){
        count++;
        }
    }
console.log(count);
}

countChar('This sTring has one word B aaand mayBe more....', 'T');