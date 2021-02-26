//Multiplicando elementos do array/


function grow(x){
    var x;
    var k = 1;
    
    for (const i of x){
      k *= i;
    }
    return k;
}
console.log(grow([3,6,12]));