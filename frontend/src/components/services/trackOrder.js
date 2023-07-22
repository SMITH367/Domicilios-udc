import {
    FetchData
} from "./fetchData";
import {
    lengthValidation,
    numberValidation,
} from "./validations";


const trackOrder = async (
    e,
    orderNumber
) => {
    e.preventDefault();

    if (
        lengthValidation(orderNumber) === true
    ) {
        if (numberValidation(orderNumber) === true) {

            const url = "https://tired-hare-getup.cyclic.app/orders/search/" + orderNumber;
            const fetch = new FetchData(url);

            const dataOrder = await fetch.FetchDataApiGet();


            if (dataOrder.length > 0) {
                return dataOrder

            } else {
                alert("Error numero de orden inexistente");
            }

        } else {
            alert("Debe diligenciar los campos correctamente");
        }
    } else {
        alert("No puede ingresar campos vacios");
    }
};

export {
    trackOrder
};