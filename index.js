const express = require("express");
const { inputConverter } = require("./inputOutputConverter");
const methodController = require("./controller");
const product = require("./api/product");
 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/product", product);

app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});