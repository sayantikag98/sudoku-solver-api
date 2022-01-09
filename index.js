const express = require("express");
const { json, urlencodede, urlencoded } = require("body-parser");
const app = express();
const PORT = 3000;
const { inputConverter, outputConverter } = require("./inputOutputConverter");
const sudokuSolver = require("./sudokuSolver");
let board;

app.use(json());
app.use(urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("hello get");
});

app.post("/", (req, res) => {
    board = inputConverter(req.body.board);
    if(board.length === 0) res.send("Invalid input...");
    else{
        if(sudokuSolver(board, 9)) res.send(outputConverter(board));
        else res.send("This sudoku puzzle cannot be solved");
    }
    
});

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});