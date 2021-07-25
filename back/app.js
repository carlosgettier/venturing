const express = require("express")
const app = express()
var cors = require('cors')

app.listen(3001, () => console.log("corriendo"))

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())

const apiRouter = require("./src/router/apiRouter")

app.use("/api", apiRouter)