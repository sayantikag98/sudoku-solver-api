const express = require("express");
const { inputConverter } = require("./inputOutputConverter");
const methodController = require("./controller");
const router = require("./router");
 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});