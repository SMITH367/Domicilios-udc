import React from "react";
import "../styles/neworder.css";
const ResumenOrder = ({
  pickupAddress,
  deliveryAddress,
  user,
  adresseName,
  priceDelivery,
  timeOfDelivery
}) => {
  return (
    <section>
      <div>
        <h1 className="center">Resumen de la orden </h1>
        <div className="resume-order-data-cont">
          <p className="font-bold"> Dirección de recogida: </p>
          <p>{pickupAddress}</p>
          <p className="font-bold"> Dirección de entrega: </p>
          <p>{deliveryAddress}</p>
        </div>
        <div className="resume-order-data-cont">
          <p>
            {" "}
            <span className="font-bold">Emisor:</span> {user}{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold">Destinatario:</span> {adresseName}
          </p>
        </div>
        <div className="resume-order-data-cont">
       
        <p>
            <span className="font-bold mt-1em">Tiempo estimado del servicio: </span> 
          {timeOfDelivery}
          </p>

          </div>
        <div className="resume-order-data-cont">
       
          <p className="font-bold center">
            Costo del servicio{" "}
            <span className="price-delivery-value">${priceDelivery}</span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export { ResumenOrder };
