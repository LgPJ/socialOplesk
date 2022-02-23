
function qux() {
    //return "Hello word";
}

//console.log(qux());

/** console.log(qux()); OJO: Esto no se puede hacer*/

/*const qux = function() {
    /**NOTA: Este modelos de funciones no pueden ser llamadas antes de su diseño */
//var nombre = "Juan";
//var pais = "Vvv";
//var edad = 20;

//return pais;
//return nombre;
//return edad;
//}

function qux() {
    var nombre = "Juan";
    var pais = "Vvv";
    var edad = 20;

    //return pais;
    //return nombre;
    //return edad;
}

//console.log(qux());

function longitudNombre(nombre) {
    return nombre.length;
}

function validaLongitud(long) {
    if (long >= 10) {
        return "El nombre excede el limite ".concat(long);
    } else {
        return "El nombre no excede el limite ".concat(long);
    }
}

//console.log(validaLongitud(longitudNombre("Jose Miguel")));

function operacionNumeros(operacion, a, b) {

    //Valida que tipo de dato esta enviando el usuario

    /*if(operacion == "suma"){

        if(typeof a == "string") {

            return "No se puede sumar, A es un string";

        } else {

            if(typeof b == "string") {

                return "No se puede sumar, B es un String";

            } else {

                return a + b;
            }
        }

    } else {

        if (operacion == "resta") {

            if(typeof a == "string") {

                return "No se puede restar, A es un string";
    
            } else {
    
                if(typeof b == "string") {
    
                    return "No se puede restar, B es un String";
    
                } else {
    
                    return a - b;
                }
            }   
        } else {

            if (operacion == "multiplicacion") {

                if(typeof a == "string" || a <= 0) {
    
                    return "No se puede multiplcar, A es un string o es menor que 0";
        
                } else {
        
                    if(typeof b == "string" || b <= 0) {
        
                        return "No se puede multiplcar, B es un String o es menor que 0";
        
                    } else {
        
                        return a * b;
                    }
                }
            } else {

                if (operacion == "division") {

                    if(typeof a == "string") {
        
                        return "No se puede dividir, A es un string";
            
                    } else {
            
                        if(typeof b == "string" || b <= 0) {
            
                            return "No se puede dividir, B es un String o es menor o igual a 0";
            
                        } else {
            
                            return a / b;
                        }
                    }
                }
            }
        }
    }*/

    switch (operacion) {

        case "sumar":

            if (typeof a == "string") {

                return "No se puede sumar, A es un string";

            } else {

                if (typeof b == "string") {

                    return "No se puede sumar, B es un String";

                } else {

                    return a + b;
                    
                }
            }
            break;

        case "restar":

            if (typeof a == "string") {

                return "No se puede restar, A es un string";

            } else {

                if (typeof b == "string") {

                    return "No se puede restar, B es un String";

                } else {

                    return a - b;
                    
                }
            }
            break;

        case "multiplicar":

            if (typeof a == "string" || a <= 0) {

                return "No se puede multiplcar, A es un string o es menor que 0";

            } else {

                if (typeof b == "string" || b <= 0) {

                    return "No se puede multiplcar, B es un String o es menor que 0";

                } else {

                    return a * b;
                
                }
            }
            break;

        case "dividir":
            if (typeof a == "string") {

                return "No se puede dividir, A es un string";

            } else {

                if (typeof b == "string" || b <= 0) {

                    return "No se puede dividir, B es un String o es menor o igual a 0";

                } else {

                    return a / b;
                
                }
            }
            break;
    }

}



console.log(operacionNumeros("sumar", 10, 22));
console.log(operacionNumeros("restar", "10", 5));
console.log(operacionNumeros("multiplicar", "0", 1));
console.log(operacionNumeros("dividir", 0, 1));