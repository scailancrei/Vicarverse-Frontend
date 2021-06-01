import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './productos.scss'


//Componente para renderizar la lista de los productos

export default function Productos() {

    function importAll(r) {
        const images = {};


        r.keys().map((item) => {

            return images[item.replace('./', '')] = r(item);
        });
        return images

    }

    const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));


    return (
        <>
            {/**Contenedor con las columnas de las imagenes */}
            <Container>
                <Row>
                    {

                        Object.keys(images).map(imagen => (

                            <Col key={imagen} xs sm={3} md={3} style={{ padding: 0 }}>

                                <img
                                    id="imagen"
                                    className="p-2"
                                    width={200}
                                    height={220}
                                    src={images[imagen]} alt="imagen" //Array de imagenes con la Key de la URL
                                />
                            </Col>



                        ))

                    }

                </Row>
            </Container>
        </>
    )
}