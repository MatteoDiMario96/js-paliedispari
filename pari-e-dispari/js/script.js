function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min) + min);
};

function addTwoNumbers (numberA, numberB){
    let somma = numberA + numberB;
    if(somma % 2 === 0){
        return "Pari";
    } else {
        return "Dispari";
    }
}

let tryFirst = getRandomNumber(1, 6);
console.log(tryFirst);

let firstTry = addTwoNumbers(2, 2);
console.log(firstTry);