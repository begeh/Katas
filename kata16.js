const blocksAway = function (directions) {
    //Creates an array of data pairs for each left/right turn
    let movements = [];
    for (let i = 0; i < directions.length; i += 2) {
        let pair = []
        pair.push(directions[i]);
        pair.push(directions[i + 1]);
        movements.push(pair);
    }
    //Create separate variables for east and north movements, and a final coordinates object for output
    let east = 0;
    let north = 0;
    let coordinate = {};
    //Axis variable alters directional axis to determine translation of right/left on grid
    let axis = 0;
    //Sets up initial axis information based on first movements
    if (movements[0][0] === "right") {
        east += movements[0][1];
        axis = 1;
    }
    else if (movements[0][0] === "left") {
        north += movements[0][1];
        axis = 3;
    }
    //Translates subsequent directions into north or east movements on grid
    for (let i = 1; i < movements.length; i++) {
        if (axis === 3) {
            if (movements[i][0] === "right") {
                east = east + movements[i][1];
                axis = 1;
            }
            else if (movements[i][0] === "left") {
                east = east - movements[i][1];
                axis = 4;
            }
        }
        else if (axis === 1) {
            if (movements[i][0] === "right") {
                north = north - movements[i][1];
                axis = 2;
            }
            else if (movements[i][0] === "left") {
                north = north + movements[i][1];
                axis = 3;
            }
        }
        else if (axis === 2) {
            if (movements[i][0] === "right") {
                east = east - movements[i][1];
                axis = 4;
            }
            else if (movements[i][0] === "left") {
                east = east + movements[i][1];
                axis = 1;
            }
        }
        else if (axis === 4) {
            if (movements[i][0] === "right") {
                north = north + movements[i][1];
                axis = 3;
            }
            else if (movements[i][0] === "left") {
                north = north - movements[i][1];
                axis = 2;
            }
        }
    }

    coordinate.east = east;
    coordinate.north = north;
    return coordinate;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));