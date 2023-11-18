import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

const Home = () => {
  return (
    <>
      <p>.</p>
      <div className="">
        <section className="hero-main">
          <div className="hero-main-data">
            <div>
              <h1>Super entrega</h1>
              <p className="mb-1em" style={{fontSize:"1.3em"}}>
                ¡Domicilios en Cartagena, despachos seguros y express, siempre
                que necesites!{" "}
              </p>
            </div>

            <Link style={{textDecoration:"none"}} className="buttonSimple mt-1em" to="/login">
              Realizar pedido
            </Link>
          </div>
          <div className="hero-img">
            <img
              src="https://www.netsolutions.com/insights/wp-content/uploads/2021/10/Best-Online-Food-Delivery-Apps.png"
              alt=""
            />
          </div>
        </section>

        <footer className="center footer">
          Powered with ❤️ by KBGF software solutions
        </footer>
      </div>
    </>
  );
};

export { Home };
