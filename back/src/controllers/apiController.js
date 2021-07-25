const db = require("../database/models")

let apiController = {
    all: async (req, res) => {
        const todos = await db.film.findAll()
        res.json(todos)
    },
    add: async (req, res) => {
        const todos = await db.film.create(req.body)
        res.json(todos)
    },
    edit: async (req, res) => {
        const todos = await db.film.findByPk(req.params.id)
        res.json(todos)
    },
    delete: async (req, res) => {
        const todos = await db.film.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json(todos)
    }
}
module.exports = apiController;