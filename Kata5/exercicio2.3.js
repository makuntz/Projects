function dirReduc(arr){
    let joining = arr.join("");
    const regex = /(NORTHSOUTH)|(SOUTHNORTH)|(EASTWEST)|(WESTEAST)/g;

    while(regex.test(joining)){
        joining = joining.replace(regex, '');
    }
    const m= joining.match(/(NORTH)|(SOUTH)|(EAST)|(WEST)/g) || [];
    return m;
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(['WEST', 'EAST', 'NORTH', 'SOUTH', 'SOUTH', 'WEST', 'WEST', 'EAST', 'SOUTH', 'NORTH']));