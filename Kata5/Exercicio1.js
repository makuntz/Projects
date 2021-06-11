
/*Move the first letter of each word to the end of it,
then add "ay" to the end of the word. Leave punctuation marks untouched.*/


function pigIt(str){
    // if (str == undefined){
    //     return 'igPay atinlay siay oolcay' ;
    // }
    const toArray = str.split(' ');
   
    const final = toArray.map(e => {
        if (e != '!' && e != '?' && e != '.'){
            const sub = e.substr(1);
            const add = sub + e[0] + 'ay';
            return add;
        } else {
            return e;
        } 
    })
    const joinUp = final.join(' ');
    return joinUp;
    
}
console.log(pigIt('Hello world !'));

/*Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */
