import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import iconHistory from "../views/sources/historyicon.png";
import { redirectToOrderView } from "../services/redirectToOrderView";
import { getOrders } from "../services/getOrders";
import { setStateOrder } from "../services/setStateOrder";
import "../views/styles/orderinformation.css";

const HistoryOfOrdersAdmin = () => {
  const userData = useUser();
  const getOrdersData = getOrders;
  const [orders, setOrders] = useState([]);
  const tokenValidator = localStorage.getItem("token");

  const url = "https://tired-hare-getup.cyclic.app/orders/all";
  useEffect(() => {
    const getOrders = async () => {
      const ordersFetched = await getOrdersData(url, tokenValidator);
      if (ordersFetched !== undefined) setOrders(ordersFetched.reverse());
    };
    getOrders();
  }, [getOrdersData, tokenValidator, url]);

  return (
    <>
      {userData.typeUser === "admin" ? (
        <>
          <p>.</p>
          <section className="container">
            <div className="logo-banner-g">
              <h1 className="center">Historial de ordenes</h1>
              <img className="cotization-img" src={iconHistory} alt="" />
            </div>

            <table className="table-orders mb-1em center">
              <thead>
                <tr>
                  <th>Número de orden</th>
                  <th>Fecha de orden</th>
                  <th>Estado</th>
                 
                </tr>
              </thead>

              <tbody>
                {orders.map((element, i) => (
                  <tr
                    className="container-view-goto-order abs"
                    onClick={(e) => redirectToOrderView(e, element.orderNumber)}
                    key={i}
                  >
                    <td>{element.orderNumber}</td>
                    <td>{element.date} </td>
                    <th>{setStateOrder(element.state)}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </>
  );
};

export { HistoryOfOrdersAdmin };
