import React from "react";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import { WelcomeUser } from "./elements/WelcomeUser";
import iconUser from "../views/sources/iconuser.png";
import iconNewOrder from "../views/sources/iconnueworder.png";
import iconHistory from "../views/sources/historyicon.png";
import iconStateOrder from "../views/sources/iconorderstate.jpg";
import "./styles/dashboard.css";

const Dashboard = ({ setUserDataStatus }) => {
  const userData = useUser();

  return (
    <>
      {(userData.login !== "true" || userData.typeUser !== "user") && (
        <Navigate to="/"></Navigate>
      )}

      <p>.</p>

      <div className="container center">
        
          <>
            <WelcomeUser
              name={userData.name}
              img={iconUser}
              message={`Bienvenido ${userData.name}`}
            ></WelcomeUser>
            <article className="orders-dashboard">
              <h2 className="mt-1em">
                {" "}
                ¡Accede a la información de tus pedidos! 📦{" "}
              </h2>

              <Link to="/nueva-orden" className="orders-dashboard-el center">
                <img src={iconNewOrder} className="icon-orders" alt="" />
                <br />
                <p> Nuevo pedido</p>
              </Link>
              <Link to="/seguimiento" className="orders-dashboard-el">
                <img src={iconStateOrder} className="icon-orders" alt="" />
                <p>Rastrear </p>
              </Link>
              <Link to="/usuario/historial" className="orders-dashboard-el ">
                <img src={iconHistory} className="icon-orders" alt="" />
                <p>Historial </p>
              </Link>
            </article>
          </>

      </div>
    </>
  );
};

export { Dashboard };
