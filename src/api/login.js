import axios from 'axios'


//COMPONENTE DE REACT PARA HACER EL LOGIN
/**
 * Este componente se encarga de obtener un usuario a partir de la credenciales.
 * @returns {data} contiene la respuesta POST con el usuario usando las credenciales
 */
const url = 'https://vicarverse-backend.herokuapp.com/api/index.php'

const Login = async credentials => { //Creamos el login

    const config = {
        'Content-Type': 'application/json',

    }

    try {
        const {data} = await axios.post(url, credentials, config)
        return data
    } catch (error) {
        console.log(error)
        return false
    }

}

export default Login