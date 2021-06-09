import axios from 'axios'



const url = "https://vicarverse-backend.herokuapp.com/api/modificarUsuario.php"
const modificarUsuario = async (datos) => {

    const data = await axios.post(url, datos)
    
    console.log(data)

}



export default modificarUsuario