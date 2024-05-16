
let userWord = prompt("Dammi una parola qualsiasi e io ti dirò se è un palinndromo.");
userWord = userWord.toLowerCase();

let userWordReverse = palindromo (userWord)
console.log(userWordReverse);

if(userWord === userWordReverse){
    console.log("La parola è un Palindromo, sei fortunato.")
}else{
    console.log("Unlucky, non è un palindromo.")
}



function palindromo (parola){
    let wordReverse = "";
    for(let i = parola.length - 1; i >= 0; i--){
        wordReverse += parola[i];
    }
    return wordReverse
}



