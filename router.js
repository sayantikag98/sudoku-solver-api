const express = require("express");
const { inputConverter } = require("./inputOutputConverter");
const methodController = require("./controller");

const router = express.Router();

router.route("/")
.get((req, res) => {
    res.send("Sudoku Solver API");
}).post((req, res) => {
    const board = inputConverter(req.body.board);
    methodController(board, res);
});

router.get("/:id", (req, res) => {
    const board = inputConverter(req.params.id);
    methodController(board, res);
});

module.exports = router;