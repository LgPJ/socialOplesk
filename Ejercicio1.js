const matrox = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/* Emitir la siguiente salida:
1
5
9
3
7
*/

const variable = (arreglo) => {

    console.log(arreglo[0][0]);
    console.log(arreglo[0][2]);
    console.log(arreglo[1][1]);
    console.log(arreglo[2][0]);
    console.log(arreglo[2][2]);
}

//variable(matrox)

const a = [1, 2, 3];
/*
Indicar el tamaño del array mediante length
*/

//console.log(a.length);

const array = [100, 200, ['a', 'b'], 300, ['c', 'd'], 400, 500];

/*
Exponer el siguiente resultado:
c
a
d
b
*/

const result = (arreglo) => {

    console.log(array[4][0]);
    console.log(array[2][0]);
    console.log(array[4][1]);
    console.log(array[2][1]);
}

//result(array);

const comparar = [100, 200, 300, 400, 500];

/*
Comparar si la posición 3 es mayor a 1000 si es correcto
emitir por consola "true" en caso contrario "false"

a "true" y sino
es mayor mostrar "false"
*/

const qux = (comparar) => {

    if (comparar[3] > 1000) {
        return true;
    } else {
        return false;
    }
}

//console.log(qux(comparar));

const tipos = [100, "hola", true, ['a', 'b'], function () { return 'saludo' }];

/*
Utilizando el ciclo for iterar / recorrer el array y decir
el tipo de dato de cada elemento del array, la salida debe ser:

number
string
bool
object
function
*/

const funcionTipo = (arreglo) => {
    for (let i = 0; i < tipos.length; i++) {
        console.log(typeof (tipos[i]));
    }
}

//funcionTipo(tipos);
/*
Crear uan función llamada "planeta" al cual se le enviará
por parametro el nombre del planeta a buscar, si el planeta
ingresado existe mostrar lo siguiente:


1 MERCURIO PRIMER PLANETA DEL SISTEMA SOLAR
2 VENUS EL SEGUNDO PLANETA DEL SISTEMA SOLAR
3 TIERRA EL TERCER PLANETA DEL SISTEMA SOLAR
4 MARTE EL CUARTO PLANETA DEL SISTEMA SOLAR
5 JÚPITER EL QUINTO PLANETA DEL SISTEMA SOLAR
6 SATURNO EL SEXTO PLANETA DEL SISTEMA SOLAR
7 URANO EL SÉPTIMO PLANETA DEL SISTEMA SOLAR
8 NEPTUNO EL OCTAVO PLANETA DEL SISTEMA SOLAR

NOTA:
SI INGRESA UN PLANETA QUE NO EXISTE MOSTRAR:
EL PLANETA INGRESADO NO EXISTE

EJEMPLO
planeta("jupiter");

salida:
JUPITER ES EL QUINTO PLANETA DEL SISTEMA SOLAR
*/

const funcionPlaneta = (planeta) => {

    switch (planeta) {

        case "MERCURIO":
            return "PRIMER PLANETA DEL SISTEMA SOLAR " + `${planeta}`;
            break;

        case "VENUS":
            return "EL SEGUNDO PLANETA DEL SISTEMA SOLAR " + `${planeta}`;
            break;

        case "TIERRA":
            return "EL TERCER PLANETA DEL SISTEMA SOLAR " + `${planeta}`;
            break;

        case "MARTE":
            return "EL CUARTO PLANETA DEL SISTEMA SOLAR " + `${planeta}`;
            break;

        case "JÚPITER":
            return "EL QUINTO PLANETA DEL SISTEMA SOLAR " + `${planeta}`;
            break;

        case "SATURNO":
            return "EL SEXTO PLANETA DEL SISTEMA SOLAR " + `${planeta}`;
            break;

        case "URANO":
            return "EL SEPTIMO PLANETA DEL SISTEMA SOLAR " + `${planeta}`;
            break;

        case "NEPTUNO":
            return "EL OCTAVO PLANETA DEL SISTEMA SOLAR " + `${planeta}`;
            break;

        default:
            return "EL PLANETA " + `${planeta}` + " NO EXISTE";
            break
    }
}

let stringPlaneta = "venezuela";
let newString = stringPlaneta.toUpperCase();
//console.log(funcionPlaneta(newString));


const listaDeProductos = [
    "tv",
    "tablet",
    "laptop",
    "smartphone",
    "keyboard"
];
/*
   Utilizar el ciclo "for" para iterar/recorrer el array
de listaDeProductos y mostrar:

tablet
laptop
smartphone

*/

const funcionElectrodomesticos = (listaDeProductos) => {

    for (let i = 0; i < listaDeProductos.length; i++) {

        if (listaDeProductos[i] == "tablet") {
            console.log("tablet");
        } else {
            if (listaDeProductos[i] == "laptop") {
                console.log("laptop");
            } else {
                if (listaDeProductos[i] == "smartphone") {
                    console.log("smartphone");
                }
            }
        }
    }
}

funcionElectrodomesticos(listaDeProductos);
