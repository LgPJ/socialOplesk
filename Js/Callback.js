//Funciones CALLBACK

function saluda(msj, callback) {
    return callback(msj);
}

function mensaje(msj) {
    return "Buenas noches " + `${msj}`;
}

console.log (saluda("Maria", mensaje));



function saludar(nombre) {
    alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
}

//console.log(procesarEntradaUsuario(saludar));



