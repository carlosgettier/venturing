import React from 'react'
import './peliculas.css'
export const Peliculas = ({ film }) => {
    return (
        <div className="contenedor">
            <p>NOMBRE DE LA PELICULA: {film.nombre} </p>
            <p>DESCRIPCION: {film.descripcion} </p>
            <p>AÑO DE ESTRENO: {film.estreno}</p>
            <div className="pelisConten">
                <p>Tu pelicula</p>
            </div>
        </div>
    )
}
