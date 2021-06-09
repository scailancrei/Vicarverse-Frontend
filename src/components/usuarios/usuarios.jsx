import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import './usuarios.scss'
import getAllUsers from '../../api/getAllUsers'
import getRol from '../../api/getRol.js'
import Productos from '../productos/productos'

import TablasUsuarios from './tablasUsuarios'
import modificarUsuario from '../../api/modificarUsuario'
import borrarUsuario from '../../api/borrarUsuario'
import User from './user'

/**
 * Realizar la petición getUser para obtener un usuario en concreto
 * @returns datos
 */
export default function Usuarios() {
    let history = useHistory()
    const { usuario } = useParams()
    const [rol, setRol] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [save, setSave] = useState(null)
    const [user, setUser] = useState([])
    const [deleteUser, setDeleteUser] = useState(null)
    const [datosUser, setDatosUser] = useState([])


    //UseEffect que controla la lista de usuarios y el rol del usuario logueado
    useEffect(() => {
        async function typeRol(usuario) {
            const { data } = await getRol(usuario) //obtener el rol del usuario al iniciar sesión
            setRol(data)
        }

        async function userList() {
            const { data } = await getAllUsers() //Guardar todos los usuarios en el array
            if (rol.rol === 'admin') {
                setUsuarios(data)
            }

        }

        typeRol(usuario)
        userList()
        console.log('efecto realizado')

    }, [rol.rol, usuarios.length, usuario, save, deleteUser])


    //useEffect que controla el estado de la modificación
    useEffect(() => {
        async function handleSave(user) {
            const data = await modificarUsuario(user)
            console.log(data)
            setSave(false)


        }

        async function handleBorrar(user) {
            const data = await borrarUsuario(user)
            console.log(data)
            setDeleteUser(false)

        }

        if (save) { //si el estado save es true ejecutamos la modifiación
            handleSave(user)

        }

        if (deleteUser) {
            handleBorrar(user)

        }


    }, [save, user, deleteUser])

    const handleChange = (datos) => {
        setUser(datos)
        setSave(true)
    }


    const handleDelete = (datos) => {
        setUser(datos)
        console.log(datos)
        setDeleteUser(true)
    }

    if (history.location.state) {

        return (
            <React.Fragment>
                <div className="main-User">
                    <div className="titulo">
                        <h1>Hola bienvenido {usuario}</h1>
                    </div>

                    {rol.rol !== "admin"
                        ? <div className="client-list">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>
                                            Usuario
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Nombre
                                        </th>
                                        <th>
                                            Apellidos
                                        </th>
                                        <th>
                                            Rol
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <User userProp={usuario} />
                                </tbody>
                            </Table>

                            <Productos />


                        </div>
                        : <div className="user-List">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>
                                            Usuario
                                         </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            rol
                                        </th>
                                        <th>
                                            Eliminar
                                        </th>
                                        <th>
                                            Editar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        (usuarios.map((user) => {
                                            //Por cada usuario renderizar el componente hijo 
                                            return (<TablasUsuarios key={user.usuario} onDelete={handleDelete} onChange={handleChange} {...user} />)
                                        }))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    }
                </div>
            </React.Fragment>

        )
    } else {
        history.goBack()
    }


}
