import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import NuevoModal from './modal'


export default function Boton(props) {  //Renderiza una modal al hacer un click en el botón


    const [showModal, setShowModal] = useState(false)
    const text = props.text;


    const toggleModal = () => {
        
        setShowModal(!showModal)
        return showModal
    }

    return (    //Boton
        <div>
            <div className="col-sm-12">
                <Button onClick={toggleModal} variant="primary">{text}</Button> {/*pasa por props el text para mostrar la Modal*/}

                <NuevoModal
                    show={showModal}
                    toggle={toggleModal}
                    text={text}
                    render={props.renderBoton}
                    />
            
            </div>
        </div>
    )
}
