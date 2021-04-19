// You will be provided a string that lists many boat related items. 
// If any of these items are "Fire" you must spring into action. 
// Change any instance of "Fire" into "~~". Then return the string.


function fireFight(s){
    return s.replace(/Fire/g, '~~');
}

console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"));