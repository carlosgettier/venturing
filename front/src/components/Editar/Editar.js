import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './editar.css'

export const Editar = () => {
    const { id } = useParams()
    console.log(id)

    const [movie, setmovie] = useState({
        name: ""
    })
    console.log(movie.nombre)

    useEffect(async () => {
        const dato = await fetch(`http://localhost:3001/api/peliculas/${id}`)
        const res = await dato.json()
        console.log(res)
        setmovie(res)

    }, [])


    // const [editar, seteditar] = useState({
    //     nombre: "",
    //     descripcion: "",
    //     estreno: ""
    // })

    // const handleInput = (e) => {
    //     seteditar({
    //         ...editar,
    //         [e.target.name]: e.target.value
    //     })
    // }
    // const editado = (e) => {
    //     e.preventDefault()
    //     console.log(editar)
    // }

    return (
        <div className="contenedorEdit">
            <h1>EDICION DE BASE DE DATOS</h1>
            <form className="cargaEdit"
            //onSubmit={editado}
            >
                <label>nombre de la pelicula o serie</label>
                <input type="text"
                    name="name"
                    value="{movie.nombre}" />
            </form>

        </div>
    )
}
