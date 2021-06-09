import React from 'react'
import 'react-bootstrap'
import { Badge, Container } from 'react-bootstrap'
import './Ofertas.scss'

const Ofertas = () => {

    return (
        <Container fluid className='div-ofertas-titulo'>
            <div style={{ padding: '2px', color: 'white', backgroundColor: 'cyan', margin: '0 0 3px 0', textAlign: 'center' }}>
                <h2>Ofertas</h2>
            </div>
            <div className='div-ofertas-list'>
                <div className='oferta'>
                    <h1>
                        Oferta 1
                    </h1>

                   
                    <Badge id='nuevo' pill variant="primary" >
                        Nuevo
                    </Badge>
                </div>
                <div className='oferta'>
                    <h1>
                        Oferta 2
                    </h1>
                    <Badge id='nuevo' pill variant="primary" >
                        Nuevo
                    </Badge>
                </div>
                <div className='oferta'>
                    <h1>
                        Oferta 3
                    </h1>
                    <Badge id='nuevo' pill variant="primary" >
                        Nuevo
                    </Badge>
                </div>
            </div>
        </Container>
    )

}


export default Ofertas