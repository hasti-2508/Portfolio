const express = require('express')
require("dotenv").config()
const connectDB = require("../backend/Database/connection")

connectDB();
const app = express();


const port = process.env.PORT;

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`)
})