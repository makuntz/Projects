function duplicateCount(text){
    text.toLowerCase().split('');
     let index = text[0];
     let count = 0;

    for (let i = 0; i < text.length; i++){
        if (text[i] == index){
            index = text[i];
            count += 1;
        }  
    }
    return count;
}
console.log(duplicateCount("aabBcde"));



//it should return 2
//I need check each caracter and compare with the next
//If it will be iqual the next, push to another array
//I want to check index by index
