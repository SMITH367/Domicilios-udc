import { React, useState } from "react";
import { Navigate } from "react-router";
import useUser from "../../hooks/useUser";
import { WelcomeUser } from "./elements/WelcomeUser";
import deliveryManIcon from "./sources/deliverymanicon.png";
import { updateProfileData } from "../services/userManager";
import "./styles/forms.css";
import userIcon from "./sources/iconuser.png";

const Profile = ({ setUserDataStatus }) => {
  const userData = useUser();
  let urlDataUser = "";
  let [name, setName] = useState(userData.name);
  let [identification, setIdentification] = useState(userData.identification);
  let [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);
  let [plate, setPlate] = useState(userData.plate);
  let [vehicle, setVehicle] = useState(userData.vehicle);

  const token = localStorage.getItem("token");

  if (userData.typeUser === "user") {
    urlDataUser = "https://tired-hare-getup.cyclic.app/user/" + userData.email;
  } else if (userData.typeUser === "deliveryMan") {
    urlDataUser =
      "https://tired-hare-getup.cyclic.app/deliveryMan/" + userData.email;
  }

  return (
    <>
      {userData.login !== "true" ? (
        <Navigate to="/"></Navigate>
      ) : (
        <>
          <p>.</p>
          <div className="container">
            <section className="principal-data"></section>
            {userData.typeUser === "user" && (
              <WelcomeUser
                img={userIcon}
                message={`Bienvenido a tu perfil`}
              ></WelcomeUser>
            )}
            {userData.typeUser === "admin" && (
              <WelcomeUser
                img={userIcon}
                message={`Bienvenido administrador super entrega`}
              ></WelcomeUser>
            )}
            {userData.typeUser === "deliveryMan" && (
              <>
                <WelcomeUser
                  img={deliveryManIcon}
                  message={`Bienvenido a tu perfil`}
                ></WelcomeUser>
              </>
            )}
            <section className="form-data">
              <div className="form-data-get">
                <label>Nombre de usuario</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-data-get-input"
                  type="text"
                  placeholder="Recogida"
                />
              </div>

              <div className="form-data-get">
                <label>Identificación</label>
                <input
                  value={identification}
                  readOnly={true}
                  onChange={(e) => setIdentification(e.target.value)}
                  className="form-data-get-input"
                  type="text"
                  placeholder="Recogida"
                />
              </div>
              <div className="form-data-get">
                <label>Correo electrónico</label>
                <input
                  value={userData.email}
                  readOnly={true}
                  className="form-data-get-input"
                  type="text"
                  placeholder="Recogida"
                />
              </div>
              <div className="form-data-get">
                <label>Número de teléfono</label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="form-data-get-input"
                  type="text"
                  placeholder="Recogida"
                />
              </div>
              {userData.typeUser === "deliveryMan" && (
                <>
                  <div className="form-data-get">
                    <label>Placa</label>
                    <input
                      value={plate}
                      onChange={(e) => setPlate(e.target.value)}
                      className="form-data-get-input"
                      type="text"
                      placeholder="Placa"
                    />
                  </div>
                  <div className="editTypeVehicle">
                    <label htmlFor="packing">Tipo de vehículo: </label>
                    <select
                      name="packing"
                      id="packing"
                      className="toDeliveryLogin"
                      onChange={(e) => setVehicle(e.target.value)}
                      value={vehicle || ""}
                    >
                      <option value="Moto">Moto</option>
                      <option value="Auto">Auto</option>
                    </select>
                  </div>
                </>
              )}
            </section>

            <div className="button-simple-cont center">
              <button
                className="buttonSimple buttonw-70 mt-1em"
                onClick={(e) =>
                  updateProfileData(
                    e,
                    urlDataUser,
                    name,
                    identification.toString(),
                    phoneNumber.toString(),
                    vehicle,
                    plate,
                    userData.email,
                    userData.typeUser,
                    token,
                    setUserDataStatus
                  )
                }
              >
                Modifica tus datos
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export { Profile };
