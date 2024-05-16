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

let computerNumber = getRandomNumber(1, 6);
console.log(tryFirst);

let firstMatch = addTwoNumbers(2, 2);
console.log(firstTry);

let i = 0;
let pariOdispari;
let numeroUtente;

while(i < 1){
    pariOdispari = prompt("Scegli Pari o Dispari");
    pariOdispari.toLowerCase(); // NON CAPISCO NON MI FUNZIONANO 
    pariOdispari[0].toUpperCase(); // NON CAPISCO NON MI FUNZIONANO 
    console.log(pariOdispari)
    if(pariOdispari === "pari" || pariOdispari === "dispari"){
        i++
    }
}
let k = 0;

while(k < 1){
    numeroUtente = prompt("Scegli un numero da 1 a 5!");
    if(Number.isNaN(numeroUtente) !== true && numeroUtente >= 1 && numeroUtente <= 5){
        k++
    }
}
console.log(numeroUtente);