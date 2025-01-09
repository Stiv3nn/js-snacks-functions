/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console
function letteraIniziale(array, lettera) {
    return array.filter((element) => element[0].toLowerCase() === lettera.toLowerCase());
}
console.log(letteraIniziale(names, "L"));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]