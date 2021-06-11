//Slaphead
// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"
//So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

function bald(x){
    let count = 0;
    var array = [];
    
    for (var i=0; i<x.length; i++){
        if(x.charAt(i)=='/'){
            count ++;
        } 
    }
    if (count == 0){
        var replaced =  x.replace (/\//g, '-');
        array.push(replaced);
        array.push('Clean!');
        return array;
        }else if(count == 1){
           var replaced =  x.replace (/\//g, '-'); 
           array.push(replaced);
           array.push('Unicorn!'); 
           return array;
        }else if(count == 2){
           var replaced =  x.replace (/\//g, '-'); 
           array.push(replaced);
           array.push('Homer!') 
           return array;
        }else if (count >= 3 && count <= 5){
           var replaced =  x.replace (/\//g, '-');
           array.push(replaced);
           array.push('Careless!');
           return array;
        }else if(count > 5){
           var replaced =  x.replace (/\//g, '-');
           array.push(replaced);
           array.push('Hobo!'); 
           return array;
    }
         
}
console.log(bald('/---------'));
console.log(bald('/-----/-'));
console.log(bald('--/--/---/-/---'));



