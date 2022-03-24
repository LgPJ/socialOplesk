//Libreria para recibir datos por teclado
var readLine = require("readline-sync")
/**Libreria para cambiar color a textos */
var colors = require("colors");


let log = console.log;
/*
Manipulacion sencilla de libreria readLine
var nombre = readLine.question("Nombre : ");

log(nombre)

*/

let listaCosas = ["cereza", "tomate", "papas", "harina"];


console.log("LISTAS DE COSAS HA COMPRAR".toUpperCase());
console.log(listaCosas);

let cosas = readLine.question("Que nececitas de esta lista de cosas: ");
console.clear();


let verCosa = listaCosas.find( itemCosas => itemCosas == cosas);

if(typeof verCosa != "undefined") {
    console.log("Lo buscado existe: " + verCosa);
} else {
    console.log("Lo buscado no existe.".green.bold);
}


