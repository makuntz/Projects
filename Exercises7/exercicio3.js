//Write a function that takes a positive integer n, 
//sums all the cubed values from 1 to n, and returns that sum.

function sumCubes(n){
    var n;
    var cont = 0;

    while(n > 0){
        cont += (n*n*n);
        n -= 1;
    }
    
    return cont;
}
    

console.log(sumCubes(2));
