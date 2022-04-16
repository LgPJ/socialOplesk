//Clase de prototipos
let log  = console.log;

function Ruby(p,q,r) {
    this.p = p;
    this.q = q;
    this.r = r;
}

//Modificador de prototipo
Ruby.prototype.t = 100;

const objRuby = new Ruby(10,78,96);

let cubo = {
    x:10,
    y:10,
    z:10
};

//prototipos
let cuboBordeNaranja = {
    __proto__:cubo,
    x: 25,
    bordeNaranja:"orange"
};

log(cubo);
log(cuboBordeNaranja);

//Acceso a propiedades internas
log(cuboBordeNaranja.x);

//Acceso a propiedas dentro del proto
log(cuboBordeNaranja.__proto__.x)

//Acceso a atributo de prototipo
log(objRuby.__proto__.t);