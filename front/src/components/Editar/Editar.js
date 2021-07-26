import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import './editar.css'

export const Editar = () => {

    const historia = useHistory()
    //--llegada de datos editado y subida a la base de datos--//
    const [movie, setmovie] = useState({
        name: "",
        describir: "",
        estrenos: ""
    })

    const handleInput = (e) => {
        setmovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }
    //--- con axios enviamos los datos ala base de datos--//
    const enviarDatos = (e) => {
        e.preventDefault()
        console.log(movie)
        axios.put(`http://localhost:3001/api/peliculas/editar/${id}`, {
            nombre: `${movie.name}`,
            descripcion: `${movie.describir}`,
            estreno: `${movie.estrenos}`
        })
        historia.push("/")
    }
    //-- llegada de datos de la base de datos para editar--//
    const { id } = useParams()

    const [data, setdata] = useState({})

    useEffect(async () => {
        const dato = await fetch(`http://localhost:3001/api/peliculas/${id}`)
        const res = await dato.json()
        setdata(res)
    }, [])

    return (
        <div className="contenedorEdit">
            <h1>Agregar,Editar y Borror</h1>
            <div className="formularios">
                <form className="info">
                    <label>nombre de la pelicula o serie</label>
                    <input type="text" value={data.nombre} />
                    <label>descripcion</label>
                    <input type="text" value={data.descripcion} className="describir" />
                    <label>estreno</label>
                    <input type="text" value={data.estreno} />
                </form>

                <form className="cargaEdit" onSubmit={enviarDatos}>
                    <label>nombre de la pelicula o serie</label>
                    <input type="text"
                        onChange={handleInput}
                        name="name" />
                    <label>Descripcion</label>
                    <input type="texarea"
                        onChange={handleInput}
                        name="describir"
                        className="describir" />
                    <label>Año en que estreno</label>
                    <input type="text"
                        onChange={handleInput}
                        name="estrenos" />
                    <button type="submit">agregar</button>
                </form>
            </div>
        </div>
    )
}
