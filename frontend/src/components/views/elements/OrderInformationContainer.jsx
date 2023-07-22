import { React} from "react";
import { createAssign } from "../../services/createAssign";
import useUser from "../../../hooks/useUser";
import "../styles/orderinformation.css";

const OrderInformationContainer = ({ orderInformation, userName }) => {
  const userData = useUser();
 
  return (
    <>
      <article>
        <h2 className="center mt-1em">Ordenes disponibles</h2>
        <ul className="order-data-container">
          {orderInformation.map((element, i) => (
            <li className="order-data-item" key={i}>
              <div>
                <p>Número de orden: {element.orderNumber}</p>
                <p>Dirección de recogida: {element.collectionAddress}</p>
                <p>Dirección de entrega: {element.deliveryAddress}</p>
                <p>Precio del flete: {element.price} </p>{" "}
                <form className="center">
                  <button
                    className="buttonSimple"
                    onClick={(e) => {
                      createAssign(
                        e,
                        element.orderNumber,
                        userData.email,
                        element.price
                      );
                    }}
                  >
                    Aceptar orden
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
};

export { OrderInformationContainer };
