import axios from 'axios'

//COMPONENTE DE REACT PARA REGISTRAR USUARIOS
/**
 * Este componente se encarga de registrar un usuario en la base de datos si no existen ni el nombre de usuario ni el email.
 * @returns retorna true si se ha completado el registro o un mensaje de error en el caso de que no haya sido posible.
 */
 const url = 'http://localhost:4000/api/nuevoUser.php'

 const RegistrarUsuario = async credentials => { //Creamos el registro
 
     const config = {
         'Content-Type': 'application/json',
     }
 
     try {
         const {data} = await axios.post(url, credentials, config)
         console.log(data)
         return data
     } catch (error) {
         console.log(error)
         return false
         
         
     }
 
 }
 
 export default RegistrarUsuario