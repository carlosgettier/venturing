import React from 'react'
import './Inicio.css'
import { useState, useEffect } from 'react'
import { Peliculas } from '../Peliculas/Peliculas'

export const Inicio = () => {

    const [base, setbase] = useState([])
    useEffect(async () => {
        const data = await fetch('http://localhost:3001/api/peliculas')
        const pelis = await data.json()
        console.log(pelis)
        setbase(pelis)
    }, [])

    const [datos, setdatos] = useState({
        buscar: ""
    })

    const handleInputChange = (e) => {

        setdatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }
    const enviarDatos = (e) => {
        e.preventDefault();
        console.log(datos.buscar)
    }


    return (
        <div className="inicio">
            <h1>PELICULAS</h1>
            <form className="formulario" onSubmit={enviarDatos}>
                <input type="text"
                    placeholder="nombre de pelicula"
                    name="buscar"
                    onChange={handleInputChange}
                />
                <button type="submit">buscar</button>
            </form>

            <div className="lista">
                {base.map((film, i) => {

                    return <Peliculas film={film} key={i} />
                })}
            </div>




        </div>
    )
}


