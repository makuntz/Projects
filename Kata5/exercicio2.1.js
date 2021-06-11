function dirReduc(arr){
   const foundElem = [];
   
   for(let i = 0; i < arr.length; i++){
      if (arr[i] == "NORTH" && arr[i + 1] == "SOUTH" || arr[i] == "SOUTH" && arr [i + 1] == "NORTH" || arr [i] == "EAST" && arr [i + 1] == "WEST" ||  arr [i] == "WEST" && arr [i + 1] == "EAST"){ 
         arr.splice(i,1);
         
      }else {
         foundElem.push(arr[i]);
      }
   }
   return foundElem;
}



console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(['WEST', 'EAST', 'NORTH', 'SOUTH', 'SOUTH', 'WEST', 'WEST', 'EAST', 'SOUTH', 'NORTH']));