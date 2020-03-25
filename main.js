// richiesta del cognome da inserire
var nuovo = prompt("Quale nuovo cognome vuoi inserire?");

// array di cognomi
var lista = ["Diplodoco", "Kebab", "Canaglia", "Enciclopedico", "Scarponi", "Bonobo"]

// stampa dell'array di cognomi 
var cognomePrecedente;
for (var i = 0; i < lista.length; i++) {
  cognomePrecedente = document.getElementById("cognomibase").innerHTML ;
  document.getElementById("cognomibase").innerHTML = cognomePrecedente + "<li>" + lista[i] +"</li>";
}

// inserimento del cognome utente all'interno dell'array
lista.push(nuovo);

// stampa dei cognomi in ordine alfabetico
lista.sort();

var cognomePrecedente2;

for (var i = 0; i < lista.length; i++) {
  cognomePrecedente2 = document.getElementById("stampacognomi").innerHTML ;
  document.getElementById("stampacognomi").innerHTML = cognomePrecedente2 + "<li>" + lista[i] +"</li>";
}

// stampa della posizione del cognome utente
var listaOrdineAlfabetico = lista.indexOf(nuovo);

console.log(listaOrdineAlfabetico);

var posizione = listaOrdineAlfabetico +1;

document.getElementById("dichiarazione").innerHTML =posizione;
