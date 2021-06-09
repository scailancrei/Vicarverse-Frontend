import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <Container fluid id='contenedor'>
            <ul>
                <li>
                    <a href="https://www.twitter.com/vicarverse" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/vicarverse"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </li>
                <li>
                    <p>Politicas de Privacidad</p>

                </li>
                <li>
                    <p>Contacto: <a href="vicarverse@gmail.com">vicarverse@gmail.com</a></p>
                </li>
            </ul>
        </Container>
    )

}



export default Footer