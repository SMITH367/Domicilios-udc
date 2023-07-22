import React, { useRef } from "react";
import useUser from "../../../hooks/useUser";
import { Link } from "react-router-dom";
import { closeSesion } from "../../services/closeSesion";
import installApliction from "../../services/installAplication";
import "../styles/header.css";
import icon from "../sources/icon.jpg";

const Header = ({ setUserDataStatus }) => {
  const toogle = useRef();
  const { login, typeUser } = useUser();

  const toogleHeader = () =>
    toogle.current.classList.toggle("nav-phone-visible");
  const handleMenu = () => toogle.current.classList.toggle("nav-phone-visible");

  const installButton = useRef(null);

  installApliction(installButton);

  window.addEventListener("appinstalled", (evt) => {
    installButton.current.hidden = true;
    console.log("running");
  });

  return (
    <header className="header">
      <nav className="nav">
        <div>
          <Link className="logo" to="/">
            <img src={icon} alt="" />
          </Link>
        </div>

        <button onClick={toogleHeader} className="toogle-init">
          &#9776;
        </button>

        <ul ref={toogle} className="nav-menu" onClick={handleMenu}>
          
          {login === "true" && (
            <li className="nav-menu-item font-12">
              <Link to="/perfil">Perfil</Link>
            </li>
          )}
           {login === "true" && typeUser === "admin" && (
            <li className="nav-menu-item">
              <Link to="/admin/dashboard/home">Menú principal</Link>
            </li>
          )}
           {login === "true" && typeUser === "admin" && (
            <li className="nav-menu-item">
              <Link to="/admin/history">Historial de ordenes</Link>
            </li>
          )}

          {login === "true" && typeUser === "user" && (
            <li className="nav-menu-item">
              <Link to="/usuario">Inicio</Link>
            </li>
          )}
          {login === "true" && typeUser === "user" && (
            <li className="nav-menu-item">
              <Link to="/usuario/historial">Tus ordenes</Link>
            </li>
          )}

          {login === "true" && typeUser === "deliveryMan" && (
            <li className="nav-menu-item">
              <Link to="/domiciliario/inicio">Inicio</Link>
            </li>
          )}
          
          {login !== "true" && (
            <li className="nav-menu-item">
              <Link to="/">Inicio</Link>
            </li>
          )}

          {login !== "true" && (
            <li className="nav-menu-item">
              <Link to="/login">Iniciar sesión</Link>
            </li>
          )}

          {login !== "true" && (
            <li className="nav-menu-item">
              <Link to="/registro">Regístrate</Link>
            </li>
          )}

          <li className="nav-menu-item">
            <Link to="/seguimiento">Seguir pedido</Link>
          </li>

          <li className="nav-menu-item">
            <button className="buttonSimple" ref={installButton} hidden>
              Instalar la app
            </button>
          </li>

          {login === "true" && (
            <button
              className=" btn-sesion btn-sesion-close nav-menu-item"
              onClick={(e) => closeSesion(setUserDataStatus)}
            >
              Cerrar sesión
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
