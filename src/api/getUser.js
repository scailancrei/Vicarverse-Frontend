import axios from 'axios'



//COMPONENTE DE REACT PARA OBTENER LOS DATOS DEL USUARIO
/**
 * Este componente se encarga de obtener un usuario a partir de la credenciales.
 * @returns {data} contiene la respuesta GET con el usuario y el ROL
 */
const url = 'https://vicarverse-php-api.herokuapp.com/getUser.php'

const getUser = async credentials => { //obtenemos los datos


    try {
        const data = await axios.get(url, {
            params: {
                usuario: credentials    //se le pasa el nombre de usuario
            }
        })
        
        return data //devuelvo un objeto json con el rol y su valor.
    } catch (error) {
        console.log(error)
        return false
    }
}


export default getUser