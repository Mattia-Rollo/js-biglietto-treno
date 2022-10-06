/*
x chiedere all'utente quanti km vuole percorrere
x chiedere all'utente l'eta

x convertire i dati inseriti da stringhe a numeri così da poter fare i calcoli

x calcolare il costo del biglietto in base ai km inseriti 
x dall'utente * 0.21
x utente ha meno di 18 anni?
x    applico lo sconto del 20%
x utente ha più di 65 anni?
x    applico lo sconto del 40%;
x altrimenti lascio il prezzo invariato

*/

let kmPercorso = parseInt(prompt('quanti km devi percorrere?'));
let eta = parseInt(prompt('quanti anni hai?'));
console.log(kmPercorso, eta);

let prezzoBiglietto = kmPercorso * 0.21;
console.log(prezzoBiglietto);
let totale;


if (isNaN(kmPercorso) || isNaN(eta)) {
    alert('inserisci solo numeri grazie');
}

if (eta < 18) {

    prezzoBiglietto = prezzoBiglietto * 0.8; 
    //alternativa --> prezzoBiglietto - prezzoBiglietto * 20 / 100;
}else if (eta > 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
}

console.log(prezzoBiglietto.toFixed(2));

let myH2 = document.getElementsByClassName('prezzo-biglietto')[0];

if (isNaN(prezzoBiglietto)) {
    
    myH2.innerHTML = `
    
    <span>il prezzo del biglietto è incalcolabile, aggiorna la pagina o schiaccia f5 e inserisci caratteri numerici tipo(1,2,3,4...) e non ('uno,due,tre..') grazie, ok? ce la puoi fare!</span> 
    
    `
    document.body.style.backgroundImage = "url('../terminator.jpg')" ;
    document.body.style.backgroundSize = "cover" ;
}else {
    myH2.innerHTML = `
    
    Il prezzo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €
    
    `;
    
}


