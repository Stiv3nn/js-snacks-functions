/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = prompt("inserisci una parola per verificare quante vocali contiene:");


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console
function numVocali(parola){
    return parola.split('').filter(lettera => 'aeiou'.includes(lettera)).length;
}
console.log(numVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)