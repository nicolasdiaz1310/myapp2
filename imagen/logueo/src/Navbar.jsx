import Logo from "./assets/img/logo.png";
import Facebook from './assets/img/facebook (2).png';
import Instagram from "./assets/img/instagram (1).png";
import Twitter2 from "./assets/img/gorjeo (1).png";
function NavBar() {
  return (
    <div>
      <nav className="barra-lateral">
        <img src={Logo} alt="" />
        <ul className="lista">
          <li className="item">Menú</li>
          <li className="item">Servicios</li>
          <li className="item">Acerca de nosotros</li>
          <li className="item">Contacto</li>
        </ul>
        <div className="Rsociales">
          <img src={Facebook} alt="" />
          <img src={Twitter2} alt="" />
          <img src={Instagram} alt="" />
          
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
