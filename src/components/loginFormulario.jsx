import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import login from '../api/login'





/**
 * 
 * @returns Si el estado está en true devuelve el dashboard con la lista de usuarios, sino retorna de vuelta el formulario del login
 */
export default function LoginFormulario(props) {

    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')

    const history = useHistory()


    const [loading, setLoading] = useState(false)

    const [alerta, setAlerta] = useState(false)

    //Los estados de los componentes del login


    


    let data = {}

    const handleSubmit = async (e) => {

        e.preventDefault()

        setLoading(true)
         data = await login({
            usuario,
            contraseña
        })  //Funcion del archivo login.js donde se realiza la petición con los datos
        // al servidor nodejs, guardo la respuesta y la muestro por consola

        
        if (data) {
            let location = {
                pathname: `/usuarios/${data.usuario}`,
                state: {
                    isLogin: true
                }
            }

            
            props.toggle()  //EJECUTO LA FUNCION toggleModal QUE SE PASA COMO PROPS DESDE EL COMPONENTE BOTÓN -> MODAL -> LOGINFORMULARIO. 
                            //Al tener una respuesta se ejecuta la función y pone el valor del estado a false, lo que implica que se cierre la modal
            props.render()
            history.push(location)
            


        } else {
            setUsuario('')
            setContraseña('')
            setLoading(false)
            setAlerta(true)

        }
        setTimeout(() => {
            setAlerta(false)
        }, 3000)

    }


    return (
        <div>

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

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña: </Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Introduce Contraseña"
                            value={contraseña}
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                    </Form.Group>

                    <Button disabled={loading} variant="primary" type="submit" block>
                        {loading
                            ? 'Cargando...'
                            : 'Iniciar sesion' //Si el estado de loading es True mostrará 'Cargando' y si es false muestra 'Iniciar sesión'
                        }
                    </Button>

                </Form>

                {
                    alerta &&
                    <Alert variant={'danger'}>
                        Los datos introducidos son erroneos
                    </Alert>
                }



            </div>


        </div>
    )

}