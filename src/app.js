const express = require('express');
require('../src/db/conn');
const router = require("./router/men")
const MensRanking = require("../src/model/olympic");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use(router);
// we will handle post req.




app.listen(port, () => {
    console.log(`connection is live at port no ${port}`);
})