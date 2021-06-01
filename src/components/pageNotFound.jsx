import React from 'react'
import { Redirect } from 'react-router'


//Componente para redireccionar a la pagina de inicio

 const PageNotFound = () => (
    <div>
        <Redirect
            to={{
                pathname: "/"
            }}
        />
    </div>

)

export default PageNotFound