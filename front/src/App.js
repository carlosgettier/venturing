import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import { Administrar } from "./components/Administrar/Administrar";
import { Inicio } from "./components/Inicio/Inicio";
import { Agregar } from "./components/Agregar/Agregar"
import { Borrar } from "./components/Borrar/Borrar";
import { Editar } from "./components/Editar/Editar";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <hr />
      <Switch>
        <Route path="/agregar/borrar/:id">
          <Borrar />
        </Route>
        <Route path="/agregar/editar/:id">
          <Editar />
        </Route>
        <Route path="/administrar">
          <Administrar />
        </Route>
        <Route path="/agregar">
          <Agregar />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
