// Utilizando reverse para inverter strings/

// function solution(str){
//     var str;
//     var splitStr = str.split('');
//     var reverse = splitStr.reverse('');
//     var joinAgain = reverse.join('');
    
//     return joinAgain;
      
   
// }
// console.log(solution('mundo'));

function solution(str) {
    
    return str.split('').reverse('').join('');
}
console.log(solution('mundo'));
