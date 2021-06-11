
//Somar os positivos de um array//


function positiveSum(arr) {
    let sum = 0;
    
    for (const elem of arr){
        if (elem > 0){
            sum += elem;
        } 
    }
    return sum;
}

console.log(positiveSum([-1, -600, 1,2, 3]));