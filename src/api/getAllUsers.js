const axios = require('axios').default



//COMPONENTE DE REACT PARA RECUPERAR TODOS LOS USUARIOS
/**
 * Este componente se encarga de obtener una lista de todos los usuarios
 * @returns {data} contiene la respuesta GET con los usuarios
 */
 const url = 'https://vicarverse-backend.herokuapp.com/api/mostrarUsuarios.php'

 const getAllUsers = async () => { //Creamos el login
 
     const config = {
         'Content-Type': 'application/json',
 
     }
 
     try {
         const data = await axios.get(url, config)
         
         return data
         
     } catch (error) {
         console.log(error)
         return false
     }
 
 }
 
 export default getAllUsers