// richiesta del cognome da inserire
var nuovo = prompt("Quale nuovo cognome vuoi inserire?");

// array di cognomi
var lista = ["Diplodoco", "Kebab", "Canaglia", "Enciclopedico", "Scarponi", "Bonobo"]

// inserimento del cognome utente all'interno dell'array
lista.push(nuovo);
var presente;

for (var i = 0; i < lista.length; i++) {
  presente = lista[i];
  console.log(presente);
}

// stampa dei cognomi in ordine alfabetico


// stampa della posizione del cognome utente
