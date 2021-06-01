import React from 'react'
import { Modal } from 'react-bootstrap'
import LoginFormulario from './loginFormulario'
import RegistrarFormulario from './registrarFormulario'


export default function NuevoModal(props) {



    const Formulario = (props) => {
        if (props.text === "Acceder") {
            return <LoginFormulario toggle={props.toggle} render={props.render} />
        } else if (props.text === "Registrarse"){
            return <RegistrarFormulario toggle={props.toggle} />
        }
    }
    
    return (
        <>
            <Modal
                show={props.show}
                onHide={props.toggle}
                backdrop="static"
            >
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.text}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {Formulario(props)}
                    </Modal.Body>

                </Modal.Dialog>
            </Modal>
        </>
    )

}

