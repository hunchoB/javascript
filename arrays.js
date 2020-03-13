var range = function( x, y, z){
        var arr=[];
        if (arguments.length == 2){
            for (let i=x; i<=y;i++ ){
            arr.push(i);
            }
        }
        else
            {   
                if (z>0){
                 for (i=x; i<=y; i+=z){
                    arr.push(i);
                    }
                }
                else 
                {   for (i=x; i>=y; i+=z){
                    arr.push(i);
                }

            }
        }    
    return(arr);
    }
    
var sum = function (arr) {
    var summa=0;
    for (let i=0; i<arr.length;i++){
        summa+=arr[i];
    }
return(summa);
}   
console.log(sum(range(1,10)));