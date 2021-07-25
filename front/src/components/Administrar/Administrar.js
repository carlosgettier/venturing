import React from 'react'
import { useState } from 'react'
import csvToJson from 'csvtojson'

import './Administrar.css'

export const Administrar = () => {

    const [archivo, setarchivo] = useState()

    const handleInputChange = (e) => {

        setarchivo({
            ...archivo,
            [e.target.name]: e.target.value
        })
    }

    const enviarDatos = (e) => {
        e.preventDefault();

        csvToJson()
            .fromFile(archivo.ingreso)
            .then((json) => {
                console.log(json)
            })


    }

    return (




        <div>
            <form className="ingreso" onSubmit={enviarDatos}>
                <input type="file"
                    onChange={handleInputChange}
                    name="ingreso" />
                <button type="submit">enviar</button>
            </form>

        </div>
    )
}
