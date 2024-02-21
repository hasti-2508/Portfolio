const express = require('express')
require("dotenv").config()
const connectDB = require("../backend/Database/connection");
const cors = require('cors')

connectDB();
const app = express();

app.use(cors());
const port = process.env.PORT;


app.use(express.json());
app.use("/", require("../backend/routes/form.routes.js") )

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`)
})                                                                                                                                                                                                                                                  