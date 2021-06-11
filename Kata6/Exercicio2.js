/* Write a function that accepts an array of 10 integers (between 0 and 9), 
that returns a string of those numbers in the form of a phone number.*/


function createPhoneNumber(numbers){
    const first = [numbers[0], numbers[1], numbers[2]].join('');
    const second = [numbers[3], numbers[4], numbers[5]].join('');
    const third = [numbers[6], numbers[7], numbers[8], numbers[9]].join('');

    return  '('+ first + ')' + ' ' + second + '-' + third;

  

  
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));





//It should return  "(123) 456-7890"
//Access the index and get numbers
