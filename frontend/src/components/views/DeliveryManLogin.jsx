import React, { useState } from "react";
import { loginSesion } from "../services/loginSesion";
import { useValidateLogin } from "../../hooks/useValidateLogin";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import "./styles/forms.css";

const DeliveryManLogin = ({ setUserDataStatus }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userData = useUser();

  const validation = useValidateLogin(userData);

  return (
    <>
      {validation.redirect !== 0 ? (
        <Navigate to={validation.urlToRedirect}> </Navigate>
      ) : (
        <>
          <p> . </p>
          <div className="container content-form">
            <h1 className="center"> Iniciar sesión domiciliario</h1>{" "}
            <form className="form center">
              <input
                type="email"
                className="form-el"
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <input
                type="password"
                className="form-el"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <button
                className="buttonSimple buttonSimpleSesion"
                onClick={(e) =>
                  loginSesion(
                    e,
                    setUserDataStatus,
                    email,
                    password,
                    "deliveryMan"
                  )
                }
              >
                Inicia sesión
              </button>
            </form>
            <p className="center mt-1em">
              ¿Eres un usuario? entra{" "}
              <Link to="/login" style={{ color: "#5f97ff" }}>
                aqui
              </Link>
            </p>
            <p className="center mt-1em">
              ¿Eres equipo super entrega? entra{" "}
              <Link to="/admin/login" style={{ color: "#5f97ff" }}>
                aqui
              </Link>
            </p>
          </div>{" "}
        </>
      )}
    </>
  );
};

export { DeliveryManLogin };
