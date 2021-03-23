//Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:
//kata = 5 Petes kata = 10 life = 0 eating = 1
// <40 = 'Super happy!'
// <70 >=40 = 'Happy!'
// <100 >=70 = 'Sad!'
// >=100 = 'Miserable!'

function paul(x){
    const arrayOfValues = [{
        name: 'kata',
        value: 5
    }, {
        name: 'Petes kata',
        value: 10
    }, {
        name: 'life',
        value: 0
    }, {
        name: 'eating',
        value: 1
    }];

    let sumOfValues = 0;
    for (const elem of x) {
        const objectFound = arrayOfValues.find(obj => obj.name == elem);
        const value = objectFound.value;
        sumOfValues = sumOfValues + value;
    }

    if (sumOfValues < 40) {
        return 'Super happy!';
    } else if (sumOfValues >= 40 && sumOfValues < 70) {
        return 'Happy!';
    } else if (sumOfValues >= 70 && sumOfValues < 100) {
        return 'Sad!';
    } else {
        return 'Miserable!';
    }
}

console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']));