import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import RegistrarUsuario from '../api/registrarUsuario'

export default function RegistrarFormulario() {
    const [usuario, setUsuario] = useState('')
    const [contraseña1, setContraseña1] = useState('')
    const [contraseña2, setContraseña2] = useState('')
    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState(false)
    const [message, setMessage] = useState('')



    let datos = {
        usuario,
        email,
        contraseña1
    }

    const Alerta = () => {

        return (
            <Alert variant="primary">
                {message}
            </Alert>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (contraseña1 === contraseña2) {
            datos = {
                usuario: usuario,
                email: email,
                contraseña: contraseña1
            }
            const respuesta = await RegistrarUsuario(datos)
            if (respuesta === "Datos guardados correctamente") {
                setMessage(respuesta)
                setAlerta(true)
                setUsuario('')
                setEmail('')
                setContraseña1('')
                setContraseña2('')
            } else {
                setMessage(respuesta)
                setAlerta(true)
            }


        } else {

            setAlerta(true)

        }
        setTimeout(() => {
            setAlerta(false)
        }, 3500)

    }

    return (
        <div>


            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Introduce el usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Introduce el email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña: </Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Introduce Contraseña"
                        value={contraseña1}
                        onChange={(e) => setContraseña1(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirmar contraseña: </Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={contraseña2}
                        onChange={(e) => setContraseña2(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                    Registrar
                </Button>
            </Form>


            {
                alerta &&
                <Alerta />
            }


        </div>
    )
}