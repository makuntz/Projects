/*Write a function dirReduc which will take an array of strings and returns an array of strings 
with the needless directions removed (W<->E or S<->N side by side).*/


function dirReduc(arr){    
        j = 0;
        while(j < arr.length-1){ 
                arr.map(function(e, i){
                        if(e == 'SOUTH' && arr[i + 1] == 'NORTH' || e == 'NORTH' && arr[i + 1] == 'SOUTH' || e == 'EAST' && arr[i + 1] == 'WEST' || e == 'WEST' && arr[i + 1] == 'EAST'){
                               arr.splice(i, 2);}
                
                });
        }
        return arr; 
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
