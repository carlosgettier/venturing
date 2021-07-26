import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import './borrar.css'
import axios from 'axios'
export const Borrar = () => {

    //-- parametro de url que se va a tomar para borrar--//
    const { id } = useParams()

    const historia = useHistory()
    //-- pedido delete por axios para borrar datos--/
    const borrar = (e) => {
        e.preventDefault()
        let result = window.confirm("estas por borrar un dato definitivamente")
        if (result == true) {
            const res = axios.delete(`http://localhost:3001/api/peliculas/${id}`)
                .then(res => console.log(res));
        }

        historia.push("/")
    }


    console.log(id)

    const [movie, setmovie] = useState([])

    useEffect(async () => {
        const data = await fetch(`http://localhost:3001/api/peliculas/${id}`)
        const res = await data.json()

        setmovie(res)

    }, [])


    return (
        <div className="contenedorBorrar">
            <h1> Borrado</h1>
            <form className="cargaBorrar" onSubmit={borrar}>
                <label>nombre de la pelicula o serie</label>
                <input type="text"
                    value={movie.nombre}
                    name="nombre" />
                <label>Descripcion</label>
                <input type="text"
                    value={movie.descripcion}
                    name="descripcion" />
                <label>Año en que estreno</label>
                <input type="text"
                    value={movie.estreno}
                    name="estreno" />
                <button type="submit">borrar</button>
            </form>
        </div>
    )
}
