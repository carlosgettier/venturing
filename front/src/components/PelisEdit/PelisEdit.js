import React from 'react'
import {

    Link
} from "react-router-dom";
import './peliculas.css'
export const PelisEdit = ({ film }) => {
    return (
        <div className="vistas">
            <p>nombre: {film.nombre} </p>
            <p>descripcion: {film.descripcion}</p>
            <p>estreno: {film.estreno}</p>
            <div className="links">
                <Link to={`/agregar/editar/${film.id}`} className="navlink"> EDITAR <i class="fas fa-edit"></i></Link>
                <Link to={`/agregar/borrar/${film.id}`} className="navlink"> BORRAR <i class="fas fa-trash-alt"></i></Link>
            </div>
        </div>
    )
}
