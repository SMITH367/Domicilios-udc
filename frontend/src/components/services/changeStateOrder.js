import swal from "sweetalert";
import {
    FetchData
} from "./fetchData";

import socket from "../../hooks/useSocket";

const emitChangeState = () => {
    socket.emit("updateState", "order was changed state");
};

const emmitCancelOrder = (orderNumber) => {
    socket.emit("updateState", `cancel ${orderNumber}`)
}

const changeStateOrder = async (e, orderNumber, stateNumber, priceOfDelivery = 0, deliveryManEmail, token) => {
    e.preventDefault();

    let onChangeStateString = ""

    if (stateNumber === 0) {
        onChangeStateString = "Seguro que desea cancelar la orden?"

    } else if (stateNumber === 4) {
        onChangeStateString = "Seguro que desea marcar la orden como entregada?"

    }
    swal({
        title: onChangeStateString,
        text: "Numero de orden " + orderNumber,
        icon: "success",
        closeOnClickOutside: false,
        buttons: [
            'Cancelar',
            'Confirmar'
        ]
    }).then(async (isConfirm) => {
        if (isConfirm) {
            const url = "https://tired-hare-getup.cyclic.app/orders/update/state/" + orderNumber;
            const fetch = new FetchData(url);

            const changeState = await fetch.FetchDataApi({
                    state: stateNumber,
                },
                "PUT"
            );
            console.log(changeState)
            if (changeState) {

                if (stateNumber === 4) {
                    emitChangeState()
                    localStorage.removeItem("proccess-order")
                    window.location.reload();
                } else if (stateNumber === 0) {
                    emmitCancelOrder(orderNumber)
                    window.location.reload();
                }
            } else {
                alert("Ha ocurrido un error, no ha sido posible modificar la orden")
                window.location.reload()
            }
        }

    });
};

export {
    changeStateOrder
};