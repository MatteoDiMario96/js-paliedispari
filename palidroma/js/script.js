
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
    let word = parola
    let wordReverse = "";
    for(let i = word.length - 1; i >= 0; i--){
        wordReverse += word[i];
    }
    return wordReverse
}



