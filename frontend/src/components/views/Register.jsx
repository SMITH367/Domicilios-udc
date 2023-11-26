import React, { useState } from "react";
import { createUser } from "../services/createUser";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import useUser from "../../hooks/useUser";
import "./styles/forms.css";

const Register = ({ setUserDataStatus }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();
  const [userName, setUserName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [Identification, setIdentification] = useState();
  const userData = useUser();

  return (
    <>
      {userData.login !== "true" ||
        (userData.typeUser !== "admin" && <Navigate to="/login"></Navigate>)}
      <p>.</p>

      <div className="container">
        <h1 className="center">Registro de clientes</h1>
        <form className="form center">
          <input
            type="number"
            className="form-el"
            placeholder="Identificación"
            onChange={(e) => setIdentification(e.target.value)}
          />
          <input
            type="text"
            className="form-el"
            placeholder="Nombre"
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="email"
            className="form-el"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            className="form-el"
            placeholder="Teléfono"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
            type="password"
            className="form-el"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="form-el"
            placeholder="Confirmar contraseña"
            onChange={(e) => setPasswordConf(e.target.value)}
          />

          <button
            className="buttonSimple buttonSimpleSesion"
            onClick={(e) =>
              createUser(
                e,
                userName,
                email,
                password,
                passwordConf,
                Identification,
                phoneNumber
              )
            }
          >
            Registrar
          </button>
        </form>
      </div>
    </>
  );
};

export { Register };
