/*
function arrayToList(){
var list=[];
    for (i=0; i<arguments.length; i++){
    list.push({
    value:value[0],
    rest:{
        value:value[1],
        rest:null
    }
    });
}
return list;
}
*/

function arrayToList(array){
let list=null;
    for (let i= array.length -1; i>=0; i--){
        list={
            value:array[i],
            rest:list
        };
    }
return list;
}

function listToArray (list){
let array=[];
    for(let i=list; i; i=i.rest){
        array.push(i.value);
    }
return array;
}

function prepend (value, list){
    return {value, rest:list};

}

function nth (list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([10,20, 1]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));