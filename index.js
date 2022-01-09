const express = require("express");
const { json, urlencoded } = require("body-parser");
const app = express();
const PORT = 3000;
const { inputConverter } = require("./inputOutputConverter");
const methodController = require("./controllerFunction");

app.use(json());
app.use(urlencoded({extended: true}));

app.get("/:id", (req, res) => {
    const board = inputConverter(req.params.id);
    methodController(board, res);
});

app.post("/", (req, res) => {
    const board = inputConverter(req.body.board);
    methodController(board, res);
});

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});