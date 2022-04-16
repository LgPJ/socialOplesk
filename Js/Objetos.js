//Capturando la exportacion de una sola variable
//const data = require("./Utils");
//console.log(data);

//Capturando la exportacion multiple
const {obj, data ,list} = require("./Utils");
const pq = require("../actions/sub_action/LeerData");


/*console.log(data);
console.log(list);
console.log(obj);*/

const RedMishi = {

    nombre : "gato de fuego",
    origen : "asia",
    edad : "1000 años",
    poder : ["escupe fuego","vuela","salta"],
    debilidades: ["agua", "gas", "calor"]
};

const log = console.log;

//log(RedMishi);
//log(RedMishi.nombre);

const claves = Object.keys(RedMishi);
//log(claves)
const valores = Object.values(RedMishi);
let len = claves.length;
let val = valores.length;
//log(len);
//log(val);


//log(valores);
//log(valores[3][0]);

/*for(let i = 0; i < val; i++){
    //log(claves[i] , " - " , RedMishi[claves[i]]);
    log(typeof RedMishi[claves[i]]);
    //log(valores[i]);
}*/