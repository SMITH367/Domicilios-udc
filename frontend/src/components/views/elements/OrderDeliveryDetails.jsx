import { React, useState, useEffect } from "react";
import { getAviableOrdersDeliveryMan } from "../../services/getAviableOrdersDeliveryMan";
import useUser from "../../../hooks/useUser";
import { OrderDeliveryDetailsView } from "./OrderDeliveryDetailsView";
import { changeStateOrder } from "../../services/changeStateOrder";
import "../styles/orderinformation.css";

const OrderDeliveryDetails = ({ orderNumber, userName }) => {
  const getOrderData = getAviableOrdersDeliveryMan;
  const markDelivered = changeStateOrder;
  const token = localStorage.getItem("token");
  const [orderData, setOrderData] = useState(null);
  const userData = useUser();
  const url = "https://tired-hare-getup.cyclic.app/orders/deliveryMan/" + orderNumber;
  useEffect(() => {
    const getOrder = async () => {
      const dataOrder = await getOrderData(url, userData.email);
      
      console.log(dataOrder)
      if(dataOrder.order.state !== 0){
        dataOrder.order.userName = dataOrder.sender;
        dataOrder.order.phoneNumber = dataOrder.phone;
        setOrderData(dataOrder.order);
      } else {
        localStorage.removeItem("proccess-order")
        alert("El usuario cancelo la orden")

      }
      
    };
    getOrder();
  }, [getOrderData, url, userData.email]);

  
  return (
    <>
      {orderData !== null && (
        <>
          <OrderDeliveryDetailsView
            orderData={orderData}
            userType={userData.typeUser}
          ></OrderDeliveryDetailsView>

          <div className="center">
            <button
              className="assign-order-btn"
              onClick={(e) =>
                markDelivered(
                  e,
                  orderNumber,
                  4,
                  orderData.price,
                  userData.email,
                  token
                )
              }
            >
              Entregado ✓
            </button>
          </div>
        </>
      )}
    </>
  );
};

export { OrderDeliveryDetails };
