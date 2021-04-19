const sumSquareEvenRootOdd = ns => {
    var array = [];
    var count = 0;
    for (const n of ns){
        if (n % 2 == 0){
            array.push(Math.pow(n,2));
          
        } else {
            array.push(Math.sqrt(n));
            
        }
    }   
        for (const i of array){
            count += i;
    }
    var decimal = count.toFixed(2);
    var toNumber = parseFloat(decimal);
    return toNumber;
    
};
console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]));
