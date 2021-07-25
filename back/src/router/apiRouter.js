const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")

router.get('/peliculas', apiController.all)
router.post("/peliculas", apiController.add)
router.get("/peliculas/:id", apiController.edit)
router.delete("/peliculas/:id", apiController.delete)


module.exports = router;