import { React } from "react";
import orderIcon from "../sources/orderdelivery.png";
import {changeStateOrder} from "../../services/changeStateOrder"
import { setStateOrder } from "../../services/setStateOrder";
import "../styles/orderinformation.css";

const OrderDeliveryDetailsView = ({ orderData, userType, deliveryManInf }) => {
  const cancelOrder = changeStateOrder

  console.log(orderData)
  return (
    <>
      {orderData !== null && (
        <article className="container-ordersDeliveryMan">
          <div className="deliveryOrder-header center">
            <img src={orderIcon} alt="" />
            <h2 className="center">
            Información de la orden: {orderData.orderNumber}
            </h2>
          </div>
          <div className="information-order-clients information-order-clients-userview">
            {(userType === "deliveryMan" || userType === "admin") && (
              <>
                <p>
                  {" "}
                  <span>Cliente: {orderData.user}</span>
                </p>
              </>
            )}
            {userType === "deliveryMan" && (
              <> 
                <p>
                  {" "}
                  <span>Telefono:</span> {orderData.phoneNumber}
                </p>
              </>
            )}
            <p>
              {" "}
              <span>Destinatario:</span> {orderData.addressee.addresseeName}
            </p>
            <p>
              {" "}
              <span>Teléfono: </span>
              {orderData.addressee.phoneNumber}
            </p>
          </div>
          <div className="information-order-delivery-data">
            <p>
              {" "}
              <span>Dirección de recogida:</span> {orderData.collectionAddress}
            </p>
            <p>
              {" "}
              <span>Dirección de entrega:</span> {orderData.deliveryAddress}
            </p>

            <p>Medidas del paquete: {orderData.orderInformation.measures}</p>

            <p>Fecha de la orden: {orderData.date}</p>
            {userType === "user" && (
              <>
                <p>Valor del paquete: ${orderData.orderInformation.value} </p>
                <p>
                  Contenido del paquete: {orderData.orderInformation.contents}{" "}
                </p>
              </>
            )}
            <p>Precio de la orden: {orderData.price}</p>

            {deliveryManInf !== null && userType==="user"&&(
              <>              
                <p>Domiciliario: {deliveryManInf.name}</p>
                <p>Vehículo: {deliveryManInf.vehicle} {deliveryManInf.plate}</p>
                <p>Teléfono domiciliario: {deliveryManInf.phoneNumber}</p>
              </>
            )}
            <p>Estado de la orden: {setStateOrder(orderData.state)}</p>
            {orderData.state !== 0 && orderData.state !== 4 && userType === "user" && (
                  <p>
                    <button
                      onClick={(e) => cancelOrder(e, orderData.orderNumber, 0)}
                      className="assign-order-btn"
                    >
                      Cancelar orden
                    </button>
                  </p>
                )}
            
          </div>
        </article>
      )}
    </>
  );
};

export { OrderDeliveryDetailsView };
