/* Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!!
Please note for this kata you can count lower case 'g' as only one ring.
Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:
if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';*/


function olympicRing(a){
    a = a.split('');
    var rings = 'abdegopqABDOPQR'.split('');
    var array = [];
        
    for (const elem of a){
        if (rings.includes(elem)){
            array.push(elem);
        } if(elem == 'B'){
            array.push(elem);
        }
    }
    
    var score = Math.floor((array.join('').length)/2);
    if (score == 1 || score < 1){
        return  'Not even a medal!';
    } else if(score == 2){
        return 'Bronze!';
    } else if (score == 3){
        return 'Silver!';
    } else if (score >3){
        return 'Gold!';
    }
}
console.log(olympicRing('UwVkCkykhBGkFdWUeJHsuNj'));
