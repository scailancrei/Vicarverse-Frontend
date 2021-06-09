import axios from 'axios'



const url = "https://vicarverse-backend.herokuapp.com/api/borrarUsuario.php"
const borrarUsuario = async (datos) => {
    const data = await axios.post(url, datos)
    console.log(data)

}





export default borrarUsuario