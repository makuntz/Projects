//ArrayDiff: It should remove all values from list a, which are present in list b keeping their order

function arrayDiff(a, b) {
    let newArr = [];
    

    for (const i of a){
        if(!b.includes(i)){
            newArr.push(i);
        }
    }
    
    return newArr;
}

console.log(arrayDiff([3,4], [3]));

//it should return  [4], "a was [3,4], b was [3]"