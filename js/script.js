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
const prezzoKm = 0.21;
let kmPercorso = parseInt(prompt('quanti km devi percorrere?'));
let eta = parseInt(prompt('quanti anni hai?'));
console.log(kmPercorso, eta);
let totale = 0;
console.log(typeof totale);
let sconto;

let prezzoBiglietto = kmPercorso * prezzoKm;
console.log(prezzoBiglietto);

const maggiorenne = 18;
console.log(typeof maggiorenne);
const anziano = 65;

if (isNaN(kmPercorso) || isNaN(eta)) {
    alert('inserisci solo numeri grazie');
}

if (eta < maggiorenne) {
    totale = prezzoBiglietto * 0.8;
    sconto = '20%'; 
    //alternativa --> prezzoBiglietto - prezzoBiglietto * 20 / 100;
}else if (eta > anziano) {
    totale = prezzoBiglietto * 0.6;
    sconto = '40%';
}

console.log('il prezzo è di ' + prezzoBiglietto.toFixed(2));
console.log(typeof prezzoBiglietto);

let myH2 = document.getElementsByClassName('prezzo-biglietto')[0];

if (isNaN(prezzoBiglietto)) {
    
    myH2.innerHTML = `
    
    <span>il prezzo del biglietto è incalcolabile, aggiorna la pagina o schiaccia f5 e inserisci caratteri numerici tipo(1,2,3,4...) e non ('uno,due,tre..') grazie, ok? ce la puoi fare! se no ti vengo a cercare</span> 
    
    
    `
    myH2.style.width = '600px';
    document.querySelector('h1').innerHTML = '<span class="">FATAL ERROR </span>';
    document.body.style.backgroundImage = "url('../terminator.jpg')" ;
    document.body.style.backgroundSize = "cover" ;


}
// else if ((isNaN(!prezzoBiglietto)) && ((age <= 65) &&  (age >=18))) {
//     myH2.innerHTML = `
    
//     Il prezzo del biglietto è di: ${totale.toFixed(2)} €
    
//     `;
//     document.getElementById("MyElement").classList.remove('d-none');
    

// }

else {
    if ( eta < 18) {
    console.log(totale);

    myH2.innerHTML = `
    
    Il prezzo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €
    ma siccome hai ${eta} anni hai diritto a uno sconto del ${sconto}
    quindi il totale è ${totale.toFixed(2)} €
    
    `;
    document.getElementById("MyElement").classList.remove('d-none');
    }
    else if ( eta > 65) {
    console.log(totale);

    myH2.innerHTML = `
    
    Il prezzo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €
    ma siccome hai ${eta} anni hai diritto a uno sconto del ${sconto}
    quindi il totale è ${totale.toFixed(2)} €
    
    `;
    document.getElementById("MyElement").classList.remove('d-none');
    } else {
        myH2.innerHTML = `
        Il prezzo del biglietto è di: ${prezzoBiglietto.toFixed(2)}
        `
        document.getElementById("MyElement").classList.remove('d-none');
    }
}


