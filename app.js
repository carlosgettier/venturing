const express = require("express")
const app = express()

app.listen(3000, () => console.log("corriendo"))

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const apiRouter = require("./src/router/apiRouter")

app.use("/api", apiRouter)