//Given an array of numbers (in string format), 
//you must return a string. 
//The numbers correspond to the letters of the alphabet in reverse order:
//a=26, z=1 etc.
//You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
//var num = ['26', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
//var alfabeto = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]

function stringifyArray(x) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const reverseAlphabet = alphabet.split('').reverse();
  reverseAlphabet.push('!', '?', ' ');

  const stringified = x.map(number => {
      const letterObjects = reverseAlphabet.find(letter => reverseAlphabet.indexOf(letter) +1 == number);
      return letterObjects;
  })

  const phrase = stringified.join('');
  console.log(phrase);
  return phrase;
}
stringifyArray([1, 10]);
  
  
 
  
  


