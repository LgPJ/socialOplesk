

//Arrow Functions 
/**Una funcion de flecha no puede ser llamada antes de la declaracion de la misma*/
const qux = (nombre) => {
    return "Hello " + `${nombre}`;
}

//console.log(qux("Luis"));


//Arrow functions simplified
const quxV2 = (name) => "Hello " + `${name}`; 

//console.log(quxV2("Manuel"));

const connect = (mapA, mapB) => (items) => {
    return `${mapA} ${mapB} ${items}` 
}

//console.log(connect("latam", "tiene")("el poder"));

const foo = f1 => f2 => f3 => f4 => f3 + f2;

//console.log(foo()(2)(3)());

//Funcion curry
const sumaCurry = (valor1) => (valor2) => (valor3) => valor1 + valor2 + valor3;

//console.log(sumaCurry(1)(2)(3));

//Funcion suma y pow 
const sumAndPow = (valor1, valor2) => (valor3) => {
    return Math.pow((valor1 + valor2), valor3);
}

//console.log(sumAndPow(5, 2)(3));
