//Calculate how many times a number can be divided by a given number.

const divisions = (n, divisor) => {
    let count = 0;
    while(n > divisor){
        n = n / divisor;
        count ++;
    }
    return count;
  };

console.log(divisions(100,2));