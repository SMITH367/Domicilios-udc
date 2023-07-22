import { React, useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { Navigate } from "react-router";
import { TimeLine } from "./elements/GraphicTimeLine";
import { TimeBar } from "./elements/GraphicBars";
import { getOrderData } from "../services/getOrderData";
import { calculateMonth } from "../../hooks/useGetDate";

import "./styles/admindashboard.css";

const DashboardAdmin = ({ setUserDataStatus }) => {
  const userData = useUser();
  const getOrder = getOrderData;
  let url = "https://tired-hare-getup.cyclic.app/admin/statistics/";
  const [stats, setStats] = useState(null);
  const tokenValidator = localStorage.getItem("token");
  const [label, setLabel] = useState(null);
  const [cantDelivery, setCantDelivery] = useState(null);
  const [cantMoney, setCantMoney] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      const dataOrder = await getOrder(url, {}, "POST", tokenValidator);
      setStats(dataOrder);
      const label = [
        calculateMonth(dataOrder.twoMonths),
        calculateMonth(dataOrder.lastMonth),
        calculateMonth(dataOrder.currentMonth),
      ];
      const cantdeliveryNumb = [
        dataOrder.ordersTwoMothsAgo,
        dataOrder.ordersLastMonth,
        dataOrder.ordersMonth,
      ];
      const cantMoneyNumb = [
        dataOrder.cantMoneyTwoMothsAgo,
        dataOrder.cantMoneyLastMonth,
        dataOrder.cantMoneyMonth,
      ];
      setLabel(label);
      setCantMoney(cantMoneyNumb);
      setCantDelivery(cantdeliveryNumb);
    };

    getOrders();
  }, [getOrder, tokenValidator, url]);

  console.log(label);

  return (
    <>
      {(userData.login !== "true" || userData.typeUser !== "admin") && (
        <Navigate to="/"></Navigate>
      )}

      <p>.</p>

      <section className="container">
        {stats != null ? (
          <>
            <h1 className="mt-1em mb-1em center">Estadísticas del negocio</h1>
            <section className="stats-container">
              <div className="stats-el cont-stats-info">
                <article className="stats-info-el">
                  <TimeLine labels={label} cantMoney={cantMoney}></TimeLine>
                </article>

                <article className="stats-info-el">
                  <p className="mt-1em">
                    Cantidad de dinero generado ultimo mes: ${" "}
                    <label
                      style={{ fontWeight: "bolder", color: "#00ff44" }}
                      htmlFor=""
                    >
                      {stats.cantMoneyMonth}
                    </label>{" "}
                  </p>
                  <p className="mt-1em">
                    Cantidad de domicilios ultimo mes: {stats.ordersMonth}{" "}
                  </p>
                  <p className="mt-1em">
                    Promedio diario de domicilios ultimo mes:{" "}
                    {stats.deliveryAveragePerDay}
                  </p>
                </article>
                <article className="stats-info-el">
                  <p>
                    Ordenes canceladas mes:{" "}
                    <label style={{ color: "red" }} htmlFor="">
                      {stats.cantOrdersDeclinedMonth}
                    </label>{" "}
                  </p>
                </article>
              </div>
              <div className="stats-el cont-stats-info">
                <article className="stats-info-el">
                  <TimeBar labels={label} cantDelivery={cantDelivery}></TimeBar>
                </article>
                <article className="stats-info-el">
                  <h3 className="center mb-1em">
                    Cantidad de domicilios por domiciliario
                  </h3>

                  <table className="table-delivery-man mb-1em center">
                    <thead>
                      <tr>
                        <th>Domiciliario</th>
                        <th>Ordenes entregadas</th>
                      </tr>
                    </thead>

                    <tbody>
                      {stats.deliveryManAssignations.map((element, i) => (
                        <tr className="container-view-delivery-stats" key={i}>
                          <td>{element.name}</td>
                          <td>{element.deliveryManAssigned} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </article>
              </div>
            </section>
          </>
        ) : (
          <h1 className="center"> Cargando estadisticas... ■■■■■■■■■■■□□□ </h1>
        )}
      </section>
    </>
  );
};

export { DashboardAdmin };
