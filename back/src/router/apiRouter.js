const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")

router.get('/peliculas', apiController.all)
router.get("/peliculas/pedido/:dato", apiController.pedir)
router.post("/peliculas", apiController.add)
router.get("/peliculas/:id", apiController.edit)
router.put("/peliculas/editar/:id", apiController.editado)
router.delete("/peliculas/:id", apiController.delete)



module.exports = router;