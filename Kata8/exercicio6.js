//Diferença 

// function findDifference(a, b) {
    
//     var vol_a = 1;
//     var vol_b = 1;
    
//     for (const elem_a of a){
//       vol_a *= elem_a;
//     }
//     for (const elem_b of b){
//       vol_b *= elem_b;
//     }
//     if (vol_a > vol_b){
//       return (vol_a - vol_b);
//     }else {
//       return (vol_b - vol_a);
//     }
// }
// console.log(findDifference([2,4,9],[7,2,1]));

//Simple Way/

// function findDifference(a, b){
//     var vol1 = 1;
//     var vol2 = 1;

//     for (const i of a){
//         vol1 *= i;
//     }
//     for (const i of b){
//         vol2 *= i;
//     }
//     return Math.abs (vol1 - vol2);
// }   
// console.log(findDifference([2,4,9],[7,2,1]));

function findDifference(a, b){
    const vol1 = a[0]*a[1]*a[2];
    const vol2 = b[0]*b[1]*b[2];
    return Math.abs (vol1 - vol2);
}   
console.log(findDifference([2,4,9],[7,2,1]));
    

