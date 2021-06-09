import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const TablasUsuarios = (props) => {
    const [edit, setEdit] = useState(false)

    const [rol, setRol] = useState(props.rol)
    const [usuario, setUsuario] = useState(props.usuario)


    const handleDelete = () => {
        setUsuario(props.usuario)
        let datos = {
            usuario: usuario
        }
        props.onDelete(datos)

    }

    const handleChange = () => {

        let datos = {
            usuario: usuario,
            rol: rol
        }

        props.onChange(datos)
        setEdit(!edit)
    }

    //Función para habilitar los botones de editar y guardar.
    const handleEdit = () => {
        setEdit(!edit)
        setUsuario(props.usuario)
    }


    return (
        <>
            <tr key={props.usuario}>
                <td>
                    {props.usuario}
                </td>
                <td>
                    {props.email}
                </td>
                <td>
                    {edit ?
                        <select value={rol} onChange={(event) => setRol(event.target.value)} >
                            <option value="admin">admin</option>
                            <option value="cliente">cliente</option>
                            <option value="trabajador">trabajador</option>
                        </select>
                        : props.rol
                    }
                </td>
                <td>

                    {
                        props.rol !== 'admin' ?
                            <Button onClick={handleDelete} variant='danger'>eliminar</Button>
                            : ''
                    }
                </td>
                <td>
                    {
                        props.usuario !== 'juan' ?
                            <Button variant='secondary' onClick={handleEdit}>Editar</Button>
                            : ''
                    }
                </td>

                {
                    edit &&
                    <td>
                        <Button onClick={handleChange}>Guardar</Button>
                    </td>

                }

            </tr>

        </>
    )

}

export default TablasUsuarios