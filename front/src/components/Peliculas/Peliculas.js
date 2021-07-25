import React from 'react'
import './peliculas.css'
export const Peliculas = ({ film }) => {
    return (
        <div className="contenedor">
            <p>nombre de la pelicula: {film.nombre} </p>
            <p>descripcion:{film.descripcion} </p>
            <p>año de estreno: {film.estreno}</p>
            <div className="pelisConten">
                <p>tu pelicula</p>
            </div>
        </div>
    )
}
