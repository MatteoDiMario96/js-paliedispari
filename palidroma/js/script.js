
const userWord = prompt("Dammi una parola qualsiasi e io ti dirò se è un palinndromo.");

let userWordReverse = palindromo (userWord)
console.log(userWordReverse);



function palindromo (parola){
    let word = parola
    let wordReverse = "";
    for(let i = word.length - 1; i >= 0; i--){
        wordReverse += word[i];
    }
    return wordReverse
}



