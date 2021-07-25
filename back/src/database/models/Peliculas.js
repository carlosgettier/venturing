module.exports = function (sequelize, DataTypes) {
    let alias = "film"
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nombre: {
            type: DataTypes.STRING,
            notNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            notNull: true
        },
        estreno: {
            type: DataTypes.INTEGER
        }



    }
    let config = {
        tableName: "peliculas",
        timestamps: false,
        underscored: false
    }
    const film = sequelize.define(alias, cols, config)
    return film
}