import React from "react";
import { NavLink } from "react-router-dom";
import "./Logueo.css";
import Fondologueo2 from "./assets/img/fire-14.gif";
import Logo from './assets/img/the LEAFLY kitchen.jpg'

function App() {
  return (
    <div>
      <img className="logo" src={Logo} alt="" />
      <div className="gral">
        <div className="container">
          <img src={Fondologueo2} alt="Imagen" />
          <div className="box">
            <form>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" />
              </div>
              <button type="submit">
                <NavLink to='/pagprincipal'></NavLink>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
