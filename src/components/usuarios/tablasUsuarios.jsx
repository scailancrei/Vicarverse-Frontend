import React, { useEffect, useState } from 'react'

const TablasUsuarios = (props) => {
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState([])

    const [rol, setRol] = useState(props.rol)

    const { _id } = props
    const { $oid } = _id
    id.concat($oid)


    useEffect(() => {

        


    }, [rol])


    return (
        <>
            <tr key={$oid} id={id} >
                <td>
                    {props.usuario}
                </td>
                <td>
                    {props.email}
                </td>
                <td>
                    {edit ?
                        <select name="rol" onChange={(e) => setRol(e.target.value)} >
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
                            <button>eliminar</button>
                            : ''
                    }
                </td>
                <td>
                    {
                        props.rol !== 'admin' ?
                            <button onClick={() => {
                                setEdit(true)
                            }}>Editar</button>
                            : ''
                    }

                </td>
            </tr>

        </>
    )

}

export default TablasUsuarios