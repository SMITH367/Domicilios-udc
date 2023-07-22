import {
    createContext
} from "react";

const Ordercontext = createContext({

    pickupNeighborhood: "",
    deliveryNeighborhood: "",
    collectionAddress: "",
    deliveryAddress: "",
    priceOfDelivery: "",
    adresseName: "",
    addresseePhoneNumber: "",
    contents: "",
    measures: "",
    value: ""

})

export {
    Ordercontext
}