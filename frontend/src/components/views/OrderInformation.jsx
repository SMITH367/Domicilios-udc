import { React, useState, useEffect } from "react";
import { getOrderNumberByHash } from "../services/getOrderNumberByHash";
import { getOrderData } from "../services/getOrderData";
import useUser from "../../hooks/useUser";
import "../views/styles/orderinformation.css";
import { OrderDeliveryDetailsView } from "./elements/OrderDeliveryDetailsView";

const OrderInformation = () => {
  const orderNumber = getOrderNumberByHash(window.location.hash);
  const getOrder = getOrderData;
  let userData = useUser();
  let url = "https://tired-hare-getup.cyclic.app/order/user/" + userData.name;
  const [order, setOrder] = useState(null);
  const tokenValidator = localStorage.getItem("token");
  const [deliveryManInfo, setDeliveryManInf] = useState(null)

  useEffect(() => {
    const getOrders = async () => {
      const dataOrder = await getOrder(
        url,
        { orderNumber },
        "POST",
        tokenValidator
      );

      setOrder(dataOrder.order[0]);
      if(dataOrder.deliveryManInf !== undefined) setDeliveryManInf(dataOrder.deliveryManInf)

    };
    getOrders();
  }, [getOrder, orderNumber, tokenValidator, url]);

  return (
    <>
      <p>.</p>
      <section className="container">
        <OrderDeliveryDetailsView
          orderData={order}
          userType={userData.typeUser}
          deliveryManInf={deliveryManInfo}
        ></OrderDeliveryDetailsView>
      </section>
    </>
  );
};

export { OrderInformation };
