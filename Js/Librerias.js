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

//let cosas = readLine.question("Que nececitas de esta lista de cosas: ");
console.clear();

/*
let verCosa = listaCosas.find( itemCosas => itemCosas == cosas);

if(typeof verCosa != "undefined") {
    console.log("Lo buscado existe: " + verCosa);
} else {
    console.log("Lo buscado no existe.".green.bold);
}*/

/*let question1 = readLine.question("Quien eres?: ");
console.log("pregunta 1: " + question1);

let question2 = readLine.question("Donde vives?: ");
console.log("pregunta 2: " + question2);

let question3 = readLine.question("Eres venezolano?: ");
console.log("pregunta 3: " + question3);*/


let ingresos = 0;
let listaUsuarios = ["foo", "qux", "boot", "origin"];
let listaBurguers = ["carnes", "pollos", "arroz"];
let usuarioExiste;
let DASH = "=";
let usuario;
let compras = [];
let codeBurguer;

function showDash(v){
    log(DASH.repeat(v).yellow);
}

function app(){
    for(;;){
        showDash(50);
        usuario = readLine.question("Usuario: ");
        usuarioExiste = listaUsuarios.find(itemU => itemU == usuario);

        if(typeof usuarioExiste != "undefined"){
            showDash(50);
            log(`Bienvenido : ${usuario}`.toUpperCase().blue);
            showDash(50);
            listaBurguers.map((burguer, idx) => log(`[${idx + 1}] - ${burguer}`.red.bold));
            showDash(50);
            codeBurguer = readLine.question("Ingrese numero de la burguer a comprar 1..3: ");
            log("\n")
            compras.push(listaBurguers[codeBurguer - 1]);
            log(`tu compra es: ${compras}`.toUpperCase().green);
            showDash(50);

        }else {
            ingresos++;

            if(ingresos == 3) {

                log("LIMITE EXCEDIDO");
                return;
            }
            
        }
    }
}

app();

