import {
    FetchData
} from "./fetchData";

import socket from "../../hooks/useSocket";

const emitChangeState = () => {
    socket.emit("updateState", "order was changed state");
};



const createAssign = async (e, orderNumber, deliveryManEmail, priceOfOrder) => {

    e.preventDefault()


    const urlAssign = "https://tired-hare-getup.cyclic.app/orders/deliveryMan/assignOrder/" + orderNumber;
    const urlChangeState = "https://tired-hare-getup.cyclic.app/orders/update/state/" + orderNumber;
    const fetch = new FetchData(urlAssign);

    const assignOrder = await fetch.FetchDataApi({
            deliveryMan: deliveryManEmail
        },
        "PUT"
    );

    fetch.url = urlChangeState

    const updateState = await fetch.FetchDataApi({
            state: 2
        },
        "PUT"
    );

    console.log(orderNumber, fetch.url)
    console.log(assignOrder, updateState)

    if (assignOrder === true && updateState === true) {
        alert("Orden asignada con exito")
        emitChangeState()
        localStorage.setItem("proccess-order", orderNumber)
        window.location.reload()
    } else {
        alert("La orden ya no esta disponible!")
        window.location.reload()
    }

}



export {
    createAssign
};