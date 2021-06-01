import React from 'react'
import Jumbotron from './jumbotron'
import Ofertas from './ofertas/Ofertas'
import Productos from './productos/productos'


export default function Inicio() {


    return (
        <div className='Inicio' style={{ height: 810 }}>
            <Jumbotron />
            <Ofertas />
            <Productos />
        </div>
    )
}

