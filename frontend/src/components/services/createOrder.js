import {
    FetchData
} from "./fetchData";
import {
    lengthValidation,
    numberValidation,
    characterValidation
    
} from "./validations";

import {
    getDate
} from "../../hooks/useGetDate";
import {
    generateOrderNumber
} from "./generateOrder";

import swal from "sweetalert";

import socket from "../../hooks/useSocket";

const emitNewOrder = () => {
    socket.emit("message", "order was created");
};

const createOrder = async (
    e,
    userName,
    adresseName,
    addresseePhoneNumber,
    contents,
    value,
    measures,
    pickupNeighborhood,
    deliveryNeighborhood,
    collectionAddress,
    deliveryAddress,
    priceOfDelivery,
    setUserDataStatus,
    userDataStatus,
    emailUser,

) => {
    e.preventDefault();

    const orderNumber = generateOrderNumber();
    const date = getDate();

    if (
        lengthValidation(adresseName) === true &&
        lengthValidation(addresseePhoneNumber) === true &&
        lengthValidation(contents) === true &&
        lengthValidation(value) === true &&
        lengthValidation(measures) === true &&
        lengthValidation(pickupNeighborhood) === true &&
        lengthValidation(deliveryNeighborhood) === true &&
        lengthValidation(collectionAddress) === true &&
        lengthValidation(deliveryAddress) === true
    ) {
        if (numberValidation(value) === true && characterValidation(addresseePhoneNumber,10)) {
            let orderData = {
                user: userName,
                date: date,
                collectionAddress: collectionAddress,
                deliveryAddress: deliveryAddress,
                price: priceOfDelivery,
                value: value,
                measures: measures,
                contents: contents,
                addresseeName: adresseName,
                addresseePhoneNumber: addresseePhoneNumber,
                orderNumber: orderNumber,
                emailUser: emailUser,
            };

            const url = "http://localhost:3000/orders/create";
            const fetch = new FetchData(url);

            const dataOrder = await fetch.FetchDataApi(orderData, "POST");
            console.log(dataOrder.added);

            if (dataOrder.added === "true") {
                setUserDataStatus(userDataStatus)
                emitNewOrder()

                swal({
                    title: "Orden creada correctamente",
                    text: "Numero de orden " + orderNumber,
                    icon: "success",
                    closeOnClickOutside: false,
                }).then(() => {
                    window.location.hash="/usuario"
                    window.location.reload()
                });
            }
        } else {
            alert("Debe diligenciar los campos correctamente");
        }
    } else {
        alert("No puede ingresar campos vacios");
    }
};

export {
    createOrder
};