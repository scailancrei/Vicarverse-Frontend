import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import '../styles/jumbotron.scss'




/**
 * Componente de la vista principal o Jumbotron
 */
export default function Jumbo() {


    return (
        <Container fluid style={{padding: 0}}>
            <Jumbotron fluid style={{margin: 0}}>
                <h1><center>Bienvenido a Vicarverse </center></h1>
            </Jumbotron>
        </Container>
    )
}

