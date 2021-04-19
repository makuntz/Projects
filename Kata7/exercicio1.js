//Chuck pushs up/

function chuckPushUps(string) {
    if (!string || typeof(string) != "string") {
        return "FAIL!!";
    }

    const noSpaceString = string.split(' ');

    const numbers = [];
    for (const elem of noSpaceString) {
        const regex = /[^01]/g;
        const replacedElem = elem.replace(regex, '');

        if (replacedElem) {
            numbers.push(replacedElem);
        }
    }

    if (!numbers || numbers.length == 0) {
        return "CHUCK SMASH!!";
    }

    let highest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const decimal = parseInt(numbers[i], 2);

        if (decimal > highest) {
            highest = decimal;
        }
    }

    return highest;
}
console.log(chuckPushUps('1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110'));
console.log(chuckPushUps('1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'));