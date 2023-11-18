import { React, useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { Navigate } from "react-router";
import { getOrders } from "../services/getOrders";
import { OrderInformationContainer } from "./elements/OrderInformationContainer";
import { OrderDeliveryDetails } from "./elements/OrderDeliveryDetails";
import { WelcomeUser } from "./elements/WelcomeUser";
import socket from "../../hooks/useSocket";
import deliveryManIcon from "../views/sources/deliverymanicon.png";
import "./styles/dashboard.css";

const DashboardDeliveryMan = () => {
  const userData = useUser();
  const aviableOrders = getOrders;
  const [orderInformation, setOrderInformation] = useState([]);
  const orderInDelivery = localStorage.getItem("proccess-order");
  console.log(orderInDelivery)
  const url = "https://tired-hare-getup.cyclic.app/orders/deliveryMan/aviable";

  useEffect(() => {
    const getOrders = async () => {
      const orders = await aviableOrders(url);
      setOrderInformation(orders);
    };
    getOrders();

    socket.on("updateState",(text)=>{
      console.log(text)
      if(text === `cancel ${orderInDelivery}`){
        localStorage.removeItem("proccess-order")
        alert("El usuario cancelo la orden")
        window.location.reload()
      } else {
        window.location.reload()
      }
    })
    socket.on("message", (text) => {
      getOrders();
    });
  }, [aviableOrders]);

  console.log(userData.typeUser);

  return (
    <>
      {(userData.login !== "true" || userData.typeUser !== "deliveryMan") && (
        <Navigate to="/"></Navigate>
      )}
      <p>.</p>
      <section className="container ">
        <WelcomeUser
          img={deliveryManIcon}
          message={`Bienvenido ${userData.name} equipo super entrega!`}
        ></WelcomeUser>
        {orderInformation !== null &&
          orderInformation !== undefined &&
          orderInformation.length > 0 &&
          orderInDelivery === null && (
            <OrderInformationContainer
              orderInformation={orderInformation}
              userName={userData.name}
            ></OrderInformationContainer>
          )}

        {orderInDelivery !== null && (
          <>
            <OrderDeliveryDetails
              orderNumber={orderInDelivery}
            ></OrderDeliveryDetails>
          </>
        )}
        {orderInDelivery === null && orderInformation === undefined && (
          <h1 className="center mt-1em">No hay ordenes disponibles!</h1>
        )}
      </section>
    </>
  );
};

export { DashboardDeliveryMan };
