import React from 'react'
import { useState } from 'react'
import csv from 'csvtojson';


import './Administrar.css'

export const Administrar = () => {

    const [archivo, setarchivo] = useState()

    const handleInputChange = (e) => {

        setarchivo({
            ...archivo,
            [e.target.name]: e.target.value
        })
    }



    const enviarDatos = async (e) => {
        e.preventDefault();
        console.log(archivo)


        // csvToJson()
        //     .fromFile(archivo.ingreso)
        //     .then((json) => {
        //         console.log(json)
        //     })


    }

    return (




        <div className="ingresos">
            <h3>SUBE UN ARCHIVO</h3>
            <form className="ingreso" onSubmit={enviarDatos}>

                <input type="file"
                    onChange={handleInputChange}
                    name="ingreso" />
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}
