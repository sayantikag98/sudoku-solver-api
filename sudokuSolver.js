// const inputConverter = require("./inputOutputStringToArrayConverter");
// const board = inputConverter("x81x");

/*
to check whether it is possible to insert a particular value for a particular (row, column)
following the rules of sudoku that is having each of the values from 1 to 9 in each row 
or each column or each of the 3x3 grid
*/
const isValid = (board, n, row, col, val) => {
    let sqrtVal = Math.sqrt(n), r = row - row % sqrtVal, c = col - col % sqrtVal;
    
    for(let i = 0; i<n; i++){
        // checking for row and column
        if(board[row][i] === val || board[i][col] === val) return false;
        // checking for 3x3 grid
        if(board[r + Math.floor(i/sqrtVal)][c + i%sqrtVal] === val) return false;
    }
    return true;
};


/*
The logic is to solve the sudoku puzzle using backtracking
- go to a cell with empty value and check whether it is possible to fill it with a value 
from 1 to 9
- check recursively whether filling that value can actually obtain the answer
- if not then backtrack and fill it with a different value and then again check recursively
whether it is possible to obtain the answer
*/
const sudokuSolver = (board, n) => {
    let row = -1, col = -1;
    /*
     here we go to each square of the sudoku grid and check whether it is already filled (non-zero value) 
     or its empty (zero value). If its empty then update the value of row and column.
    */
    for(let i = 0; i<n; i++){
        for(let j = 0; j<n; j++){
            if(board[i][j] === 0){
                row = i;
                col = j;
                break;
            }
        }
        if(row !== -1 && col !== -1) break;
    }

    // when there are no empty cell left in the sudoku board then return true and it is fully solved
    if(row === -1 && col === -1) return true;

    /*
    then go to that cell assigned above initially having zero value and check whether it is possible 
    to fill that cell with any value ranging from 1 to 9, if it is possible to fill that cell with a 
    value then fill it and recursively go the next cell having empty value. If it is not possible to 
    fill that cell with any of the value from 1 to 9 then return false and backtract to the previous 
    cell which has been filled and fill it with 0 and check whether it is now possible to fill that 
    cell with the next value 
    */
    for(let val = 1; val<=n; val++){
        if(isValid(board, n, row, col, val)){
            board[row][col] = val;
            if(sudokuSolver(board, n)) return true;
            board[row][col] = 0;
        }
    }
    return false;
};


module.exports = sudokuSolver;