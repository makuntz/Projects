//Reverse to Bit


function reverseBits (n) {
    const x = n.toString(2).split('').reverse().join('');
    const y = parseInt(x, 2);

    return y;


      
}
console.log(reverseBits(417));
