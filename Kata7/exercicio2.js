

function printerError(s) {

    var s;
    var s_split = s.split("");
    const errors = [];

    for (const i of s_split){
        const regex = /[abcdefghijklm]/g;
        const replacedElem = i.replace(regex, '');
        
        if (replacedElem){
            errors.push(replacedElem);
          
        }

    }
    return errors.length + "/" + s.length;
 
}
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));