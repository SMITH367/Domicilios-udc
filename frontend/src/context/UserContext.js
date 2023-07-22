import {
    createContext
} from "react";

const Usercontext = createContext({

    login: false,
    name: null,
    email: null,
    identification: null,
    phoneNumber: null,
    typeUser: null,
    processOrder: null,
    plate: null,
    vehicle: null

})

export {
    Usercontext
}