import React from 'react';
import './App.css'; // Archivo CSS para estilos
import Logo from './assets/img/logo.png';
import Facebook from './assets/img/facebook (2).png'
import Instagram from './assets/img/instagram (1).png'
import Twitter from './assets/img/gorjeo (1).png'


function NavBar() {
  return (
    <div>
      <nav className='sidebar'>
        <img src={Logo} alt="" className="logo" />
        <ul className="menu">
        <li>
          Inicio
        </li>
        <li>
          Productos
          <ul className="submenu">
            
          </ul>
        </li>
        <li>
          Acerca de
        </li>
        <li>
          Contacto
        </li>
      </ul>
      <div className="Rsociales">
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
          
        </div>
      </nav>
      
    </div>
  );
}

export default NavBar;