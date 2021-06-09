import React, { useState } from 'react'
import getUser from '../../api/getUser'
import getUSer from '../../api/getUser'


export default function User ({ userProp })  {
   
    const [datos, setDatos] = useState([])

    const usuario = async () => {

        const data = await getUser(userProp) 
        setDatos(data.data)
    }
    usuario()

    
    return (
        <>
            <td>
                {datos.usuario}
            </td>
            <td>
                {datos.email}
            </td>
            <td>
                {datos.nombre}
            </td>
            <td>
                {datos.apellidos}
            </td>

            <td>
                {datos.rol}
            </td>
        </>
    )
}

