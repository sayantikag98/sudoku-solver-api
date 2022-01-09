const express = require("express");
const { inputConverter } = require("./inputOutputConverter");
const methodController = require("./controller");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Sudoku Solver API");
});

app.post("/", (req, res) => {
    const board = inputConverter(req.body.board);
    methodController(board, res);
});

app.get("/:id", (req, res) => {
    const board = inputConverter(req.params.id);
    methodController(board, res);
});

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});