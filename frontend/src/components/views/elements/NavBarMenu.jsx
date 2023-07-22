import React from "react";
import { Link } from "react-router-dom";
import iconHome from "../sources/homeicon.png";
import iconHistory from "../sources/historyicon.png";
import iconStateOrder from "../sources/iconorderstate.jpg";

import "../styles/navbarmenu.css";

const NavBarMenu = () => {
  return (
    <>
      <article className="main-menu">
        <Link to="/usuario" className="main-menu-el">
          <img src={iconHome} className="main-menu-icon" alt="" />
          <p>Home</p>
        </Link>
        <Link to="/usuario/historial" className="main-menu-el">
          <img src={iconHistory} className="main-menu-icon" alt="" />
          <p>Ordenes</p>
        </Link>
        <Link to="/seguimiento" className="main-menu-el">
          <img src={iconStateOrder} className="main-menu-icon" alt="" />
          <p>Rastrear</p>
        </Link>
      </article>
    </>
  );
};

export { NavBarMenu };
