// A function for a lost number in a sequence of two arrays compared.

function findDeletedNumber(arr, mixArr) {

    if (arr.length <= 1) {
        return 0;
    
    }
    for (const elem of arr){
        if (!mixArr.includes(elem)){
            return elem;
        } 
    }
    for (const elem_a of arr){
        if (mixArr.includes(elem_a)){
            return 0;
        }
    }
}

console.log(findDeletedNumber([-1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]));
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]));
    