function abbrevName(name){
    const words = name.split(' ');

    return words[0][0].toUpperCase() + '.' + words[1][0].toUpperCase();  
}
console.log(abbrevName("Patrick Feenan"));