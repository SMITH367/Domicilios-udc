import React, { useState, useRef } from "react";
import { loginSesion } from "../services/loginSesion";
import useUser from "../../hooks/useUser";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { useValidateLogin } from "../../hooks/useValidateLogin";
import installApliction from "../services/installAplication";
import "./styles/forms.css";

const Login = ({ setUserDataStatus }) => {
  const userData = useUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const validation = useValidateLogin(userData);

  const installButton = useRef(null);

  installApliction(installButton);

  window.addEventListener("appinstalled", (evt) => {
    installButton.current.hidden = true;
    console.log("running");
  });

  return (
    <>
      {validation.redirect !== 0 ? (
        <Navigate to={validation.urlToRedirect}></Navigate>
      ) : (
        <>
          <p>.</p>
          <div className="container content-form">
            <h1 className="center">Iniciar sesión</h1>
            <form className="form center">
              <input
                type="email"
                className="form-el"
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="form-el"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="buttonSimple mt-1em mb-1em"
                style={{ width: "40%" }}
                onClick={(e) =>
                  loginSesion(e, setUserDataStatus, email, password, "user")
                }
              >
                Iniciar sesión
              </button>
            </form>
{/* 
            <p className="center mt-1em">
              ¿No tienes cuenta? Regístrate{" "}
              <Link to="/registro" style={{ color: "#5f97ff" }}>
                aqui
              </Link>
            </p> */}

            <p className="center toDeliveryLogin">
              ¿Eres domiciliario? entra{" "}
              <Link to="/iniciar/domiciliarios" style={{ color: "#5f97ff" }}>
                aqui
              </Link>
            </p>

          </div>
        </>
      )}
    </>
  );
};

export { Login };
