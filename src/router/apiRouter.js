const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")

router.get('/peliculas', apiController.all)


module.exports = router;