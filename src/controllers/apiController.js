const db = require("../database/models")

let apiController = {
    all: async (req, res) => {
        const todos = await db.film.findAll()
        res.json(todos)
    },

}
module.exports = apiController;