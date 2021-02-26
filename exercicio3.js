
//Somar os positivos de um array/


function positiveSum(arr) {
    var arr = [];
    var sum = 0;
    
    for (const value of arr){
        if (value > 0){
        sum += value;
        } 
    }
    return sum;
}

console.log(positiveSum([]));