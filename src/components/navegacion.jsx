import React, { useState } from 'react'
//import {useLocation } from 'react-router-dom'
import Boton from './boton'
import { Nav, Container, Navbar, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import '../styles/navegacion.scss'



/**
 * Clase de Navegacion para todas las paginas
 * Mostrar botones de acceso a usuarios y registrarse
 */
export default function Navegacion() {
    let history = useHistory()

    const [renderBoton, setRenderBoton] = useState(false)

    const handleRenderBoton = () => {
        cerrarSesion()
        return setRenderBoton(!renderBoton)
    }
    let cerrarSesion = () =>{
        history.replace('/')
    }
    return (
        <Container fluid style={{padding: 0}}>
            <Navbar expand="md" justify='true' bg="dark" variant="dark">
                <Link to="/">
                    <Navbar.Brand> Vicarverse</Navbar.Brand>
                </Link>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <div className="nav" >      {/* Clase ml-auto para modificar las scss*/}

                        <Nav.Item>
                            {renderBoton ?
                                <Button onClick={handleRenderBoton} variant="primary">Cerrar Sesion</Button>
                                :
                                <Boton text='Acceder' renderBoton={handleRenderBoton} />

                            }
                        </Nav.Item>

                        <Nav.Item>
                            {<Boton text='Registrarse' />}
                        </Nav.Item>

                    </div>
                </Navbar.Collapse>
            </Navbar>

        </Container >
    )
}