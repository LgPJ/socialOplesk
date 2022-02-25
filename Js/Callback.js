//Funciones CALLBACK
function saluda(msj, callback) {
    return callback(msj);
}

function mensaje(msj) {
    return "Buenas noches " + `${msj}`;
}

console.log(saluda("Maria", mensaje));



/*function saludar(nombre) {
    alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}*/

//console.log(procesarEntradaUsuario(saludar));


//Callback de sumar
function cbSumar(n1, n2) {
    return n1 + n2;
}

function calcular(n1, n2, callback) {
    return callback(n1, n2);
}

console.log(calcular(10, 20, cbSumar));

//Callback de sumar y potencia

function cbPotencia(n1, n2) {

    return Math.pow(n1, n2);
}

function cbSumar(n1, n2, n3, newCallback) {

    return newCallback(n1 + n2, n3);
}

function inicio(n1, n2, n3, callback) {

    let newCallback = cbPotencia;
    return callback(n1, n2, n3, newCallback);
}

console.log(inicio(2, 4, 2, cbSumar));

//console.log(inicio(2, 2, 2, cbSumar));


//Callback deportivo y Callback Familiar.

const cbFamiliar = (person) => "Carro Familiar con " + `${person}`;

const cbDeportivo = (person) => "Carro deportivo con " + `${person}`;

function automovil(tipo, n1, n2, cbFamiliar, cbDeportivo) {

    if (tipo == "familiar") {

        return cbFamiliar(n1);

    } else {

        return cbDeportivo(n2);
    }
}

//console.log(automovil("deportivo", 10, 5, cbFamiliar, cbDeportivo));


//const barraInicio = () => let corona = "👑" + `${corona} ${"=".repeat(50)} ${corona}`;

function barraInicio() {

    let corona = "👑";
    return `${corona} ${"=".repeat(50)} ${corona}`;
}

function barraInicio() {

    let corona = "👑";
    return `${corona} ${"=".repeat(50)} ${corona}`;
}

function barra() {

    let corona = "👑";
    return `${corona} ${"=".repeat(50)} ${corona}`;
}

function mostrarHombre(hombre){

    let lentes = "🕶"
    return `${lentes} Soy hombre ${hombre}`;
}

function mostrarMujer(mujer) {

    let costura = "🧶";
    return `${costura} Soy Mujer ${mujer}`;
    
}

function mostrarJoven(joven) {

    let zapato = "👟";
    return `${zapato} Soy Joven ${joven}`;
   
}

function mostrarPersonaje(personaje) {

    let hombre = "🤵‍♂️";
    let mujer = "🤵‍♀️";
    let joven = "🤴";

    switch (personaje) {

        case "hombre":
            return mostrarHombre(hombre);
            break;

        case "mujer":
            return mostrarMujer(mujer);
            break;

        case "joven":
            return mostrarMujer(joven);
            break;
    }

}

console.log(barraInicio());
console.log(mostrarPersonaje("mujer"));
console.log(barra());


