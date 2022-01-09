const repeatationCheck = (arr) => {
    /*
    for every element of the array if we check that the first occurence 
    of that element in the array not matches with the current index then 
    repeatation occurs otherwise not
    */ 
    arr = arr.filter(ele => ele!==0);
    if(arr.filter((ele, ind) => arr.indexOf(ele)!==ind).length === 0) return false;
    else return true;
};

const getRow = (board, row) => {
    const boardRow = [];
    for(let i = 0; i<9; i++){
        boardRow.push(board[row][i]);
    }
    return boardRow;
};

const getCol = (board, col) => {
    const boardCol = [];
    for(let i = 0; i<9; i++){
        boardCol.push(board[i][col]);
    }
    return boardCol;
};

const getGrid = (board, row, col) => {
    const r = row - row%3, c = col - col%3, boardGrid = [];
    for(let i = 0; i<9; i++){
        boardGrid.push(board[r + Math.floor(i/3)][c + i%3]);
    }
    return boardGrid;
};

const inputValidation = (board) => {
    const dataPoints1 = [[0,0], [1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8]];
    const dataPoints2 = [[0,3], [0,6], [3,0], [3,6], [6,0], [6,3]];
    for(let i = 0; i<dataPoints1.length; i++){
        if(repeatationCheck(getRow(board, dataPoints1[i][0]))) return false;
        if(repeatationCheck(getCol(board, dataPoints1[i][1]))) return false;
        if(repeatationCheck(getGrid(board, dataPoints1[i][0], dataPoints1[i][1]))) return false;
    }

    for(let i = 0; i<dataPoints2.length; i++){
        if(repeatationCheck(getGrid(board, dataPoints2[i][0], dataPoints2[i][1]))) return false;
    }
    return true;
};

module.exports = inputValidation;