//Find pairs of bears in a string "8B/B8"


function bears (x, s){

    const regex = /(8B)|(B8)/g;
    let match = regex.exec(s);

    const foundElements = [];
    while (match !== null) {
        if (match.length >= 1) {
            foundElements.push(match[0]);
        }
        match = regex.exec(s);
    }
   
    let flag;
    
    if (foundElements == 0 & x ==0){
        flag = true;
        return [foundElements.join(''), flag];
    } else if (foundElements == 0 & x != 0){
        flag = false;
        return [foundElements.join(''), flag];
    } else if (foundElements.length >= x){
        flag = true;
        return [foundElements.join(''), flag];
    } else if (foundElements.length <= x) {
        flag = false;
        return [foundElements.join(''), flag];
    }
    
    
 

}
console.log(bears(7, '8'));
console.log(bears(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'));
console.log(bears(7, '8j8mBliB8gimjB8B8jlB'));