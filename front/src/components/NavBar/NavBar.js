import React from 'react'
import {
    Link
} from "react-router-dom";
import './navbar.css'
export const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navs">
                INICIO
            </Link>
            <Link to="/administrar" className="navs">
                AGREGAR
            </Link>
            <Link to="/agregar" className="navs">
                ADMINISTRACION
            </Link>
        </div>
    )
}
