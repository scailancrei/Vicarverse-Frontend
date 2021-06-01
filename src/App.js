import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navegacion from './components/navegacion'
import Inicio from './components/inicio'
import Usuarios from './components/usuarios/usuarios'
/* import Registro from './components/registrarFormulario'; */
import PageNotFound from './components/pageNotFound';
import Footer from './components/footer/Footer'



const App = () => {


  return (
    <Router>
      <Navegacion />
      <Switch>
        <Route exact path="/"> {/* La routa exacta hace referencia al componente Inicio*/}
          <Inicio />
        </Route>
        <Route exact path="/usuarios/:usuario">
          <Usuarios />
        </Route>        {/**Ruta privada, para acceder se debe hacer primero el login */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
