import React, { useState, useEffect } from "react";
import useUser from "../../hooks/useUser";
import useOrderData from "../../hooks/useOrderData";
import { Navigate } from "react-router";
import { createOrder } from "../services/createOrder";
import { NewOrderSkipBtn } from "./elements/NewOrderSkipBtn";
import { ResumenOrder } from "./elements/ResumenOrder";
import { calculateCotizationOfOrder } from "../services/calculatePriceOfDelivery";
import "./styles/neworder.css";
import "./styles/forms.css";

const NewOrder = ({ setUserDataStatus, setOrderData }) => {
  const userData = useUser();
  const orderData = useOrderData();
  const [adresseName, setAdresseName] = useState(orderData.adresseName);
  const [addresseePhoneNumber, SetAddresseePhoneNumber] = useState(
    orderData.addresseePhoneNumber
  );
  const [contents, setContents] = useState(orderData.contents);
  const [value, setValue] = useState(orderData.value);
  const [measures, setMeasures] = useState(orderData.measures);
  const [form, setForm] = useState(0);
  const [pickupNeighborhood, setPickupNeighborhood] = useState(
    orderData.pickupNeighborhood
  );
  const [deliveryNeighborhood, setDeliveryNeighborhood] = useState(
    orderData.deliveryNeighborhood
  );
  const [collectionAddress, setCollectionAddress] = useState(
    orderData.collectionAddress
  );
  const [deliveryAddress, setDeliveryAddress] = useState(
    orderData.deliveryAddress
  );
  const [priceOfDelivery, setPriceOfDelivery] = useState(
    orderData.priceOfDelivery
  );
  const [timeOfDelivery, setTimeOfDelivery] = useState("")

  const changeForm = (view) => {
    if (priceOfDelivery < 5000) {
      alert("El valor minimo es $5000");
      return;
    }

    let orderDataGet = orderData;

    if (view === 1) {
      orderDataGet = {
        ...orderDataGet,
        pickupNeighborhood,
        deliveryNeighborhood,
        collectionAddress,
        deliveryAddress,
        priceOfDelivery,
      };
    } else if (view === 2) {
      orderDataGet = {
        ...orderDataGet,
        adresseName,
        addresseePhoneNumber,
        contents,
        measures,
        value,
      };
    }
    setOrderData(orderDataGet);
    setForm(view);
  };

  useEffect(() => {
    const createCotization = () => {
      if (pickupNeighborhood !== "" && deliveryNeighborhood !== "") {
        let cotization = calculateCotizationOfOrder(
          pickupNeighborhood,
          deliveryNeighborhood
        );
        setPriceOfDelivery(cotization.price);
        setTimeOfDelivery(cotization.timeDelivery);
      }
    };
    createCotization();
  }, [pickupNeighborhood, deliveryNeighborhood]);

  return (
    <>
      {userData.login !== "true" ||
      userData.typeUser !== "user" ? (
        <Navigate to="/"></Navigate>
      ) : (
        <>
          <p>.</p>
          <div className="container">
            {form === 0 && (
              <section>
                <form className="mb-1em">
                  <h1 className="center mb-1em">Datos de localización 🌎</h1>
                  <section className="form-data">
                    <h3 className="center title-data-location">
                      Información de recogida
                    </h3>
                    <div className="form-data-get new-order-neighborhood">
                      <label>Barrio de recogida: </label>
                      <select
                        onChange={(e) => setPickupNeighborhood(e.target.value)}
                        value={pickupNeighborhood}>
                   
                        <option value=""></option>
                        <option value="manga">Manga</option>
                        <option value="crespo">Crespo</option>
                        <option value="bocagrande">Bocagrande</option>
                        <option value="pie de la popa">Pie de la popa</option>
                        <option value="castillo grande">Castillo grande</option>
                        <option value="el bosque">El bosque</option>
                        <option value="la castellana">La castellana</option>
                        <option value="conj res zona sur">Urbanizaciones de la Zona sur</option>
                      </select>
                    </div>
                    <div className="form-data-get">
                      <label>Dirección</label>
                      <input
                        className="form-data-get-input"
                        type="text"
                        placeholder="Recogida"
                        onChange={(e) => setCollectionAddress(e.target.value)}
                        value={collectionAddress || orderData.collectionAddress}
                      />
                    </div>
                  </section>
                  <section className="form-data">
                    <h3 className="center title-data-location">
                    Información de entrega
                    </h3>
                    <div className="form-data-get new-order-neighborhood">
                      
                      <label>Barrio de entrega: </label>
                      <select
                        onChange={(e) => setDeliveryNeighborhood(e.target.value)}
                        value={deliveryNeighborhood}>
                   
                        <option value=""></option>
                        <option value="manga">Manga</option>
                        <option value="crespo">Crespo</option>
                        <option value="bocagrande">Bocagrande</option>
                        <option value="pie de la popa">Pie de la popa</option>
                        <option value="castillo grande">Castillo grande</option>
                        <option value="el bosque">El bosque</option>
                        <option value="la castellana">La castellana</option>
                        <option value="conj res zona sur">Urbanizaciones de la Zona sur</option>
                      </select>
                    </div>
                    <div className="form-data-get">
                      <label>Dirección</label>
                      <input
                        className="form-data-get-input"
                        type="text"
                        placeholder="Entrega"
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        value={deliveryAddress || orderData.deliveryAddress}
                      />
                    </div>
                  </section>
                  <section className="form-data price-delivery-cont">
                    <div className="form-data-get mt-1em">
                      <p className="center mt-1em">
                        💵 Costo del flete:{" "}
                        <span className="price-delivery-value">
                          ${priceOfDelivery}
                        </span>{" "}
                      </p>
                    </div>
                  </section>
                </form>
                <div className="neworder-skip-container mt-1em">
                  <NewOrderSkipBtn
                    direction={"Siguiente"}
                    className={"neworder-skip center"}
                    skipFunction={changeForm}
                    view={1}
                  ></NewOrderSkipBtn>
                </div>
              </section>
            )}
            {form === 1 && (
              <section>
                <form className="mb-1em">
                  <h1 className="center">Datos de la orden</h1>
                  <section className="form-data">
                    <div className="form-data-get">
                      <label htmlFor="">Destinatario: </label>
                      <input
                        type="text"
                        className="form-data-get-input"
                        placeholder="👤 Nombre de quien recibe"
                        onChange={(e) => setAdresseName(e.target.value)}
                        value={adresseName || orderData.adresseName}
                      />
                    </div>

                    <div className="form-data-get">
                      <label htmlFor="">Número de teléfono: </label>
                      <input
                        type="number"
                        className="form-data-get-input"
                        placeholder="📱 Telefono de quien recibe"
                        onChange={(e) =>
                          SetAddresseePhoneNumber(e.target.value)
                        }
                        value={
                          addresseePhoneNumber || orderData.addresseePhoneNumber
                        }
                      />
                    </div>
                  </section>

                  <h3 className="center mt-1em">Datos del paquete</h3>

                  <div className="form-data">
                    <div className="form-data-get">
                      <label htmlFor="">Valor declarado: </label>
                      <input
                        className="form-data-get-input"
                        type="number"
                        placeholder="💲Valor del paquete"
                        onChange={(e) => setValue(e.target.value)}
                        value={value || orderData.value}
                      />
                    </div>
                  </div>

                  <div className="package-info">
                    <label htmlFor="measures">Tamaño de paquete: </label>
                    <select
                      name="measures"
                      id="measures"
                      value={measures || orderData.measures}
                      onChange={(e) => setMeasures(e.target.value)}
                    >
                      <option value=""></option>
                      <option value="Pequeño">Pequeño</option>
                      <option value="Mediano">Mediano</option>
                      <option value="Grande">Grande</option>
                    </select>
                  </div>

                  <div className="contents-package">
                    <label htmlFor="">Contenido del paquete: </label>
                    <textarea
                    className="mt-1em"
                      rows="4"
                      type="text"
                      placeholder=" 📦Contenido del paquete "
                      onChange={(e) => setContents(e.target.value)}
                      value={contents || orderData.contents}
                    />
                  </div>
                </form>
                <div className="neworder-skip-container mt-1em">
                  <NewOrderSkipBtn
                    direction={"Regresar"}
                    skipFunction={changeForm}
                    view={0}
                    className={"neworder-skip center mt-1em"}
                  ></NewOrderSkipBtn>
                  <NewOrderSkipBtn
                    className={"neworder-skip center mt-1em"}
                    direction={"Siguiente"}
                    skipFunction={changeForm}
                    view={2}
                  ></NewOrderSkipBtn>
                </div>
              </section>
            )}
            {form === 2 && (
              <>
                <ResumenOrder
                  pickupAddress={`${pickupNeighborhood} ${collectionAddress}`}
                  deliveryAddress={`${deliveryNeighborhood} ${deliveryAddress}`}
                  user={userData.name}
                  adresseName={adresseName}
                  priceDelivery={priceOfDelivery}
                  timeOfDelivery={timeOfDelivery}
                ></ResumenOrder>
                <div className="center mt-1em make-back-cont-btn">
                  <NewOrderSkipBtn
                    direction={"Volver"}
                    skipFunction={changeForm}
                    view={1}
                    className={"back-btn"}
                  ></NewOrderSkipBtn>

                  <button
                    className="buttonSimple"
                    onClick={(e) =>
                      createOrder(
                        e,
                        userData.name,
                        adresseName,
                        addresseePhoneNumber,
                        contents,
                        value,
                        measures,
                        pickupNeighborhood,
                        deliveryNeighborhood,
                        `${pickupNeighborhood} ${collectionAddress}`,
                        `${deliveryNeighborhood} ${deliveryAddress}`,
                        priceOfDelivery,
                        setUserDataStatus,
                        userData,
                        userData.email
                      )
                    }
                  >
                    Realizar pedido
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export { NewOrder };
