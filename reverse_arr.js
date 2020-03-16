function reverseArray (arr){
let result_array=[];
    for (let i=arr.length; i>=0; i--) {
    result_array.push(arr[i]);
    }
return result_array;
}

function reverseArrayInPlace(newArray){
    for (i=0; i<(newArray.length)/2; i++){
    let replace=newArray[i];
    newArray[i]=newArray[newArray.length-i-1];
    newArray[newArray.length-i-1]=replace;       
    }

return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

var newArray=[1,2,3,4,5,6,7,8];
reverseArrayInPlace(newArray);
console.log(newArray);