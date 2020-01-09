let whiteQueen = [1, 1];
let blackQueen = [2, 2];
function generateBoard(first, second) {
    let board = [];
    for (let i = 0; i < 8; i++) {
        let row = []
        for (let j = 0; j < 8; j++) {
            if ((i === first[0] && j === first[1]) || ((i === second[0] && j === second[1]))) {
                row.push(1);
            }
            else {
                row.push(0);
            }
            if (j === 7) {
                board.push(row);
            }
        }
    }
    return board;
}
function queenThreat() {
    //Checks if the queens are in the same row, or same column, or if they are top=right, bottom-left, or top-left diagonally relative to each other
    if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1] || (whiteQueen[0] + whiteQueen[1]) === (blackQueen[0] + blackQueen[1])) {
        return true;
    }
    //Checking if queens are bottom-right diagonally from each other
    //Great variable determines how long for loop should check positions that are bottom-right diagonally from each queen
    let greater = 0;
    //Check relative bottom-right diagonal positions from whiteQueen for the blackQueen. Changes check variable to 1 if present.
    if (whiteQueen[0] > whiteQueen[1]) {
        greater = whiteQueen[0];
    }
    else if (whiteQueen[0] < whiteQueen[1]) {
        greater = whiteQueen[1];
    }
    let check = 0;
    for (let i = 1; i < (8 - greater); i++) {
        if (blackQueen[0] === whiteQueen[0] + i && blackQueen[1] === whiteQueen[1] + i) {
            check += 1;
        }
    }
    //Check relative bottom-right diagonal positions from blackQueen for the whiteQueen. Changes check variable to 1 if present.
    if (blackQueen[0] > blackQueen[1]) {
        greater = blackQueen[0];
    }
    else if (blackQueen[0] < blackQueen[1]) {
        greater = blackQueen[1];
    }
    for (let i = 1; i < (8 - greater); i++) {
        if (whiteQueen[0] === blackQueen[0] + i && whiteQueen[1] === blackQueen[1] + i) {
            check += 1;
        }
    }
    //If check variable is equal to 1, then whiteQueen or blackQueen is bottom-right diagonally positioned relative to top most queen
    if (check === 1) {
        return true;
    }
    else {
        return false;
    }

}
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generateBoard));

// Note: queenThreat function has been built in a way that it does not require generatedBoard varible as input to the function to evaluate queens' relative positions 