import React from 'react'
import './agregar.css'
import { useState, useEffect } from 'react'
import { PelisEdit } from '../PelisEdit/PelisEdit'
import { useHistory } from 'react-router-dom'
import axios from 'axios'





export const Agregar = () => {

    const historia = useHistory()


    const [base, setbase] = useState([])
    useEffect(async () => {
        const data = await fetch('http://localhost:3001/api/peliculas')
        const pelis = await data.json()
        console.log(pelis)
        setbase(pelis)
    }, [])

    const [crear, setcrear] = useState({
        nombre: "",
        descripcion: "",
        estreno: ""
    })
    const handleInputChange = (e) => {

        setcrear({
            ...crear,
            [e.target.name]: e.target.value
        })
    }

    const nuevo = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/peliculas',
            data: {
                nombre: crear.nombre,
                descripcion: crear.descripcion,
                estreno: crear.estreno
            }
        }).then(res => console.log(res))

        historia.push("/")
    }

    return (
        <div className="contenido">
            <h1>Agregar,Editar y Borror</h1>
            <form className="carga" onSubmit={nuevo}>
                <label>nombre de la pelicula o serie</label>
                <input type="text"
                    onChange={handleInputChange}
                    name="nombre" />
                <label>Descripcion</label>
                <input type="texarea"
                    onChange={handleInputChange}
                    name="descripcion" />
                <label>Año en que estreno</label>
                <input type="text"
                    onChange={handleInputChange}
                    name="estreno" />
                <button type="submit">Agregar</button>
            </form>
            <div className="movie">
                {base.map((film, i) => {
                    return <PelisEdit film={film} />
                })}
            </div>
        </div>
    )
}
