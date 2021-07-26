const { sequelize } = require("../database/models")
const db = require("../database/models")


let apiController = {
    all: async (req, res) => {
        const todos = await db.film.findAll()
        res.json(todos)
    },
    pedir: async (req, res) => {
        const todos = await db.film.findAll({
            where: {
                nombre: { [db.Sequelize.Op.like]: `%${req.params.dato}%` }
            }
        })
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
    editado: async (req, res) => {
        await db.film.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ success: 'editado' })
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