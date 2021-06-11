// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// const binaryArrayToNumber = arr => {
//     let numStr = '';
//     arr.map(a=>String(a)).forEach(a=>{
//       numStr += a;
//     })
//     return parseInt(+(numStr),2);
    
// };



const binaryArrayToNumber = arr => {

var number = parseInt(arr.join(''), 2);
    return number;

}
console.log(binaryArrayToNumber([0, 0, 1, 0]));
