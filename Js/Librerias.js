//Libreria para recibir datos por teclado
var readLine = require("readline-sync")
let log = console.log;

var nombre = readLine.question("Nombre : ");

log(nombre)