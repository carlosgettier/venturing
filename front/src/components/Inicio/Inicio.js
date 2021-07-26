import React from 'react'
import './Inicio.css'
import { useState, useEffect } from 'react'
import { Peliculas } from '../Peliculas/Peliculas'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { Redirect, useHistory } from 'react-router-dom'

export const Inicio = () => {

    //-- recibir peliculas de la base de datos--//
    const [base, setbase] = useState([])

    useEffect(async () => {
        const data = await fetch('http://localhost:3001/api/peliculas')
        const pelis = await data.json()
        console.log(pelis)
        setbase(pelis.slice(0, pelis.length))
    }, [])
    //-paginacion//
    const [pagina, setpagina] = useState(0)
    const peliPorPag = 3
    const paginasVisitadas = pagina * peliPorPag

    const displaypeli = base.slice(paginasVisitadas, paginasVisitadas + peliPorPag)
        .map((pel, i) => { return <Peliculas film={pel} key={i} /> })



    //-- BUSCADOR DE PELICULAS--//

    const [datos, setdatos] = useState({
        buscar: ""
    })

    const handleInputChange = (e) => {

        setdatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }
    const historia = useHistory()
    const enviarDatos = (e) => {
        e.preventDefault();
        if (datos) {
            const res = axios.get(`http://localhost:3001/api/peliculas/pedido/${datos.buscar}`)
                .then(res => setdatos(res));



        }

    }

    const cantidadPag = Math.ceil(base.length / peliPorPag)
    const cambiarPag = ({ selected }) => {
        setpagina(selected);
    };


    return (
        <div className="inicio">
            <h1>PELICULAS</h1>
            <form className="formulario" onSubmit={enviarDatos}>
                <input type="text"
                    placeholder="nombre de pelicula"
                    name="buscar"
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>

            <div className="lista">
                {displaypeli}

                <ReactPaginate
                    previousLabel={"Anterior"}
                    nextLabel={"Siguiente"}
                    pageCount={cantidadPag}
                    onPageChange={cambiarPag}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disableClassName={"paginationDisable"}
                    activeClassName={"paginationActive"}
                />


            </div>




        </div>
    )
}


