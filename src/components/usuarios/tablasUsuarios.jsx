import React from 'react'

const TablasUsuarios = (props) => {
    return (
        <>
            <tbody >
                <tr >
                    <td>
                        {props.usuario}
                    </td>
                    <td>
                        {props.email}
                    </td>
                    <td>
                        {props.rol}
                    </td>
                </tr>
            </tbody>
        </>
    )

}

export default TablasUsuarios