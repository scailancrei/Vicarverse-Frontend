import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.scss'

const Footer = () => {

    return (
        <Container fluid id='contenedor'>
            <ul>
                <li>
                    <p>Redes</p>

                </li>
                <li>
                    <p>Politicas de Privacidad</p>

                </li>
                <li>
                    <p>Cookies</p>
                </li>
            </ul>
        </Container>
    )

}



export default Footer