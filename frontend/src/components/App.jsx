import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Usercontext } from "../context/UserContext";
import { Ordercontext } from "../context/OrderContext";
import { Header } from "./views/elements/Header";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Profile } from "./views/Profile";
import { Register } from "./views/Register";
import { Dashboard } from "./views/Dashboard";
import { NewOrder } from "./views/NewOrder";
import { TrackOrder } from "./views/TrackOrder";
import { DeliveryManLogin } from "./views/DeliveryManLogin";
import { DashboardDeliveryMan } from "./views/DashboardDeliveryMan";
import { OrdersOfTheClient } from "./views/OrdersOfTheClient";
import { OrderInformation } from "./views/OrderInformation";
import { DashboardAdmin } from "./views/DashboardAdmin";
import { LoginAdmin } from "./views/LoginAdmin";
import { HistoryOfOrdersAdmin } from "./views/HistoryOfOrdersAdmin";

const App = () => {
  let [userDataStatus, setUserDataStatus] = useState({
    login: localStorage.getItem("login"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    identification: localStorage.getItem("identification"),
    phoneNumber: localStorage.getItem("phoneNumber"),
    typeUser: localStorage.getItem("typeUser"),
    progressOrder: localStorage.getItem("progressOrder"),
    processOrder: localStorage.getItem("process-order"),
    plate: localStorage.getItem("plate"),
    vehicle: localStorage.getItem("vehicle"),
  });
  let [orderData, setOrderData] = useState({
    pickupNeighborhood: "",
    deliveryNeighborhood: "",
    collectionAddress: "",
    deliveryAddress: "",
    priceOfDelivery: "",
    adresseName: "",
    addresseePhoneNumber: "",
    contents: "",
    measures: "",
    value: "",
  });

  return (
    <Usercontext.Provider value={userDataStatus}>
      <Ordercontext.Provider value={orderData}>
        <HashRouter>
          <Header setUserDataStatus={setUserDataStatus}> </Header>{" "}
          <Routes>
            <Route path="/" element={<Home> </Home>} />
            <Route
              path="/login"
              element={<Login setUserDataStatus={setUserDataStatus}> </Login>}
            />
            <Route
              path="/registro"
              element={
                <Register setUserDataStatus={setUserDataStatus}> </Register>
              }
            />{" "}
            <Route
              path="/usuario"
              element={
                <Dashboard setUserDataStatus={setUserDataStatus}> </Dashboard>
              }
            />{" "}
            <Route
              path="/nueva-orden"
              element={
                <NewOrder
                  setUserDataStatus={setUserDataStatus}
                  setOrderData={setOrderData}
                >
                  {" "}
                </NewOrder>
              }
            />{" "}
            <Route path="/seguimiento" element={<TrackOrder> </TrackOrder>} />{" "}
            <Route
              path="/iniciar/domiciliarios"
              element={
                <DeliveryManLogin setUserDataStatus={setUserDataStatus}>
                  {" "}
                </DeliveryManLogin>
              }
            />{" "}
            <Route
              path="/domiciliario/inicio"
              element={
                <DashboardDeliveryMan setUserDataStatus={setUserDataStatus}>
                  {" "}
                </DashboardDeliveryMan>
              }
            />{" "}
            <Route
              path="/perfil"
              element={
                <Profile setUserDataStatus={setUserDataStatus}></Profile>
              }
            />{" "}
            <Route
              path="/usuario/historial"
              element={<OrdersOfTheClient> </OrdersOfTheClient>}
            />{" "}
            <Route
              path="/usuario/orden/:id"
              element={<OrderInformation> </OrderInformation>}
            />{" "}
            <Route
              path="/usuario/historial"
              element={<OrdersOfTheClient> </OrdersOfTheClient>}
            />{" "}
            <Route
              path="/admin/dashboard/home"
              element={<DashboardAdmin> </DashboardAdmin>}
            />{" "}
            <Route
              path="/admin/login"
              element={
                <LoginAdmin setUserDataStatus={setUserDataStatus}> </LoginAdmin>
              }
            />{" "}
            <Route
              path="/admin/history"
              element={
                <HistoryOfOrdersAdmin setUserDataStatus={setUserDataStatus}> </HistoryOfOrdersAdmin>
              }
            />{" "}
          </Routes>{" "}
        </HashRouter>{" "}
      </Ordercontext.Provider>
    </Usercontext.Provider>
  );
};

export { App };
