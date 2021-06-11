// Write a program to determine if a string contains only unique characters. 
// Return true if it does and false otherwise.


function hasUniqueChars(str){
  
    const arrayStr = str.split('');
    const testArray = arrayStr.filter((elem, index) => str.indexOf(elem) === index);

    if (testArray.length == str.length) {
        return true;
    } else {
        return false;
    }
}
console.log(hasUniqueChars("abcdef"));
console.log(hasUniqueChars("aaabbcc"));