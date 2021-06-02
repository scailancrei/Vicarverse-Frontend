import axios from 'axios'



//COMPONENTE DE REACT PARA OBTENER EL ROL DEL USUARIO
/**
 * Este componente se encarga de obtener un usuario a partir de la credenciales.
 * @returns {data} contiene la respuesta GET con el usuario y el ROL
 */
const url = 'https://vicarverse-backend.herokuapp.com/api/getRol.php'

const getRol = async credentials => { //obtenemos el rol


    

    try {
        const data = await axios.get(url, {
            params: {
                usuario: credentials    //se le pasa el nombre de usuario del cual obtener el rol
            }
        })
        
        return data //devuelvo un objeto json con el rol y su valor.
    } catch (error) {
        console.log(error)
        return false
    }
}


export default getRol