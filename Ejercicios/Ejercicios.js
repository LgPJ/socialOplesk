let tree = "🌴";
let road = "🪨";
let genius = "🚦";
let house = "🏠";

let map = [
    ["g", 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, "h"],
]

for (let fila = 0; fila < map.length; fila++) {

    for (let col = 0; col < 6; col++) {

        if (map[fila][col] == "g") {
            map[fila][col] = genius;
        }

        if (map[fila][col] == 0) {
            map[fila][col] = tree;
        }

        if (map[fila][col] == 1) {
            map[fila][col] = road;
        }

        if (map[fila][col] == "h") {
            map[fila][col] = house;
        }

    }
}

for(let fila = 0 ; fila < map.length ; fila++){
    for(let col = 0 ;  col < map.length ; col++){
        console.log(map[fila][col]);
    }

}