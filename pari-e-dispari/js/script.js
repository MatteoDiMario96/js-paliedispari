function getRandomNumber (min, max){
    return Math.floor(Math.random() * (max - min) + max - 1);
};

function addTwoNumbers (numberA, numberB){
    let somma = numberA + numberB;
    if(somma % 2 === 0){
        return "Pari";
    } else {
        return "Dispari";
    }
}