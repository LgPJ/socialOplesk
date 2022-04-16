const data = "Hello data";

const list = ["Foo", "bar", "ware", "boot"];

//Exportacion por de separado
//module.exports = list;

const obj = {
    propA: "propiedad A",
    propB: "propiedad B",
}

//Exportando multiples variables
module.exports = {
    data,
    list,
    obj
}