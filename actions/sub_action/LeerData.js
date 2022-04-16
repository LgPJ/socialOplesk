/**
 * funcion que retorna el valor de store
 * 
   ../ nivel mas arriba en la organizacion de paquetes
   ./ mismo nivel de organizacion de paquetes
 
 * */

const data = require("../database/Store");

function readAction (data) {
  return data;
}

console.log(readAction(data));

module.exports = readAction;
