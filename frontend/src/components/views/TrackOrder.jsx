import { React, useState } from "react";
import { trackOrder } from "../services/trackOrder";
import { setStateOrder } from "../services/setStateOrder";
import "../views/styles/trackorder.css";
import trackOrderIcon from "../views/sources/trackorder.png";
import order1 from "../views/sources/order1.png";
import order2 from "../views/sources/order2.png";
import order3 from "../views/sources/order3.png";
import order4 from "../views/sources/order4.png";

const TrackOrder = () => {
  const [orderToSearch, setOrderToSearch] = useState();
  const [orderInformation, setOrderInformation] = useState(null);

  const getOrderData = async (e) => {
    let dataOrder = await trackOrder(e, orderToSearch);
    if (dataOrder !== undefined) {
      if (dataOrder.length > 0) {
        setOrderInformation(dataOrder[0]);
      }
    }
  };
 

  return (
    <>
      <p>.</p>

      <section className="container">
        <div className="search-order-tittle">
          <h1>Rastrear tu orden</h1>
          <img src={trackOrderIcon} className="search-ordericon" alt="" />
        </div>
        <form action="" className="form-search-order center">
          <input
            type="number"
            className="form-search-order-input"
            onChange={(e) => {
              setOrderToSearch(e.target.value);
            }}
            placeholder="🔍️ Numero de orden"
          />
          <input
            type="button"
            className="buttonSimple"
            value="Buscar Orden"
            onClick={(e) => {
              getOrderData(e);
            }}
          />
        </form>

        <article>
          {orderInformation !== null && (
            <>
              <ul className="order-information-list">
                <h1
                  style={{ fontSize: "1.3em" }}
                  className="center white-color"
                >
                  Información general:
                </h1>

                <div className="center">
                  {orderInformation.state === 1 && (
                    <img className="order-state-img" src={order1} alt="" />
                  )}

                  {orderInformation.state === 2 && (
                    <img className="order-state-img" src={order2} alt="" />
                  )}

                  {orderInformation.state === 3 && (
                    <img className="order-state-img" src={order3} alt="" />
                  )}

                  {orderInformation.state === 4 && (
                    <img className="order-state-img" src={order4} alt="" />
                  )}
                  {orderInformation.state === 0 && (
                    <h1 style={{ color: "#fff", fontWeight: "bolder" }}>
                      Orden Cancelada
                    </h1>
                  )}
                </div>

                <article className="information-order-container">
                  <div className="information-order-section">
                    <li className="order-information-el">
                      <p>
                      Número de orden:{" "}
                        <span>{orderInformation.orderNumber}</span>{" "}
                      </p>
                    </li>
                    <li className="order-information-el">
                      <p>Nombre de cliente: {orderInformation.user}</p>
                    </li>

                    <li className="order-information-el">
                      <p>
                        Estado de orden: {setStateOrder(orderInformation.state)}
                      </p>
                    </li>
                    <li className="order-information-el">
                      <p>Fecha de orden: {orderInformation.date}</p>
                    </li>
                  </div>
                  <div className="information-order-section">
                    <li className="order-information-el">
                      <p>
                        Domiciliario:{" "}
                        {orderInformation.deliveryMan === "" ? (
                          <>Sin asignar</>
                        ) : (
                          orderInformation.deliveryMan
                        )}
                      </p>
                    </li>
                    <li className="order-information-el">
                      <p>
                        Destinatario: {orderInformation.addressee.addresseeName}
                      </p>
                    </li>
                    <li className="order-information-el">
                      <p>
                      Dirección de entrega: {orderInformation.deliveryAddress}
                      </p>
                    </li>
                  </div>
                </article>
              </ul>
            </>
          )}
        </article>
      </section>
    </>
  );
};

export { TrackOrder };
