


function palindromo (parola){
    let word = parola
    let wordReverse = "";
    for(let i = word.length - 1; i >= 0; i--){
        wordReverse += word[i];
    }
    return wordReverse
}



