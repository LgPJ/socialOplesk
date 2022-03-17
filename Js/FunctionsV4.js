var listaCosas = ["foo", "bar", "boot", "qux"];

let nuevaLista = listaCosas.map((cosas, idx) => {
    //log(`${idx + 1 } - ${cosas}`);
    return cosas.toUpperCase();
});

//log(listaCosas);
//log(nuevaLista);

let buscarCosas = listaCosas.find((cosas, idx) => cosas == "boot");

//log(buscarCosas);

let filtrarCosas = listaCosas.filter((cosas) => {
    if(cosas.length == 3){
        return cosas;
    }
});

//log(filtrarCosas);

listaCosas.push("origin");

//log(listaCosas);

listaCosas.splice(1,0,"mitad")
//log(listaCosas);
