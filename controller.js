const inputValidation = require("./inputValidation");
const sudokuSolver = require("./sudokuSolver");
const { outputConverter } = require("./inputOutputConverter");

const methodController = (board, res) => {
    if(board.length === 0 || !inputValidation(board)){
        res.json({
            "canBeSolved": false,
            "message": "Invalid input",
            "answer": ""
        });
    }
    else{
        if(sudokuSolver(board, 9)){
            res.json({
                "canBeSolved": true,
                "message": "Solution of 9x9 sudoku grid for the given input configuration is given in answer",
                "answer": outputConverter(board)
            });
        }
        else{
            res.json({
                "canBeSolved": false,
                "message": "This sudoku puzzle for the given input configuration cannot be solved",
                "answer": ""
            });
        }
    }   
};


module.exports = methodController;