import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './usuarios.scss'
import getAllUsers from '../../api/getAllUsers'
import getRol from '../../api/getRol.js'
import TablasUsuarios from './tablasUsuarios'

/**
 * Realizar la petición getUser para obtener un usuario en concreto
 * @returns datos
 */
export default function Usuarios() {
    const history = useHistory()
    const { usuario } = useParams()
    const [rol, setRol] = useState([])
    const [usuarios, setUsuarios] = useState([])


    useEffect(() => {


        async function typeRol(usuario) {
            const { data } = await getRol(usuario)
            setRol(data)
        }

        async function userList() {
            const { data } = await getAllUsers()
            if (rol.rol === 'admin') {
                setUsuarios(data)
            }

        }

        typeRol(usuario)
        userList()


    }, [rol.rol, usuarios.length, usuario])


    if (history.location.state) {

        return (
            <React.Fragment>
                <div className="main-User">
                    <div className="titulo">
                        <h1>Hola bienvenido {usuario}</h1>
                    </div>
                    <div className="user-List">
                        <table>
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
                                </tr>
                            </thead>
                            {
                                usuarios.map((user) => (
                                    <TablasUsuarios key={user.id} {...user} />
                                ))
                            }
                        </table>
                    </div>
                </div>
            </React.Fragment>

        )
    } else {
        history.goBack()
    }


}
