import {
    FetchData
} from "./fetchData";
import {
    lengthValidation,
    emailValidation,
    numberValidation,
    characterValidation
} from "./validations";
import {
    setLoginData
} from "./setLoginData"

import swal from "sweetalert";


const getUserData = async (url, token = "") => {
    const fetch = new FetchData(url);
    const dataUser = await fetch.FetchDataApiGet(token)

    if (dataUser.length > 0 && dataUser !== undefined) {
        return dataUser[0]
    }
};



const updateProfileData = async (e, url, name, identification, phoneNumber, vehicle, plate, email, typeUser, token, setUserDataStatus) => {

    e.preventDefault()

    const fetch = new FetchData(url);


    if (
        lengthValidation(email) === true &&
        lengthValidation(name) === true &&
        lengthValidation(identification) === true &&
        lengthValidation(phoneNumber) === true
    ) {
        if (numberValidation(phoneNumber) === true && characterValidation(phoneNumber, 10) === true) {
          
                if (emailValidation(email) === true) {
                    try {
                        if (typeUser === "user") {
                            const updateProfileData = await fetch.FetchDataApi({
                                    name,
                                    identification,
                                    phoneNumber,
                                },
                                "PUT",
                                token
                            );
                            if (updateProfileData)
                                completeUpdateData(url, setUserDataStatus, typeUser)

                        } else if (typeUser === "deliveryMan") {
                            if (lengthValidation(vehicle) === true && lengthValidation(plate) === true) {
                                if (characterValidation(plate, 6) === true) {
                                    const updateProfileData = await fetch.FetchDataApi({
                                            name,
                                            phoneNumber,
                                            vehicle,
                                            plate
                                        },
                                        "PUT",
                                        token
                                    );
                                    if (updateProfileData)
                                        completeUpdateData(url, setUserDataStatus, typeUser)
                                }
                            } else
                                alert("No puede ingresar campos vacios")
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } else
                    alert("Ha ocurrido un error")
        } else
            alert("Telefono invalido")
    } else
        alert("No puede ingresar campos vacios")
};

const completeUpdateData = async (url, setUserDataStatus, typeUser) => {
    try {
        const userData = await getUserData(url)
        setLoginData(userData, setUserDataStatus, typeUser, "update")
        swal({
            title: "Datos actualizados",
            icon: "success",
            closeOnClickOutside: false,
        }).then(() => {
            window.location.hash = "/";
        });

    } catch (e) {
        console.log(e)
    }


}

export {
    updateProfileData,
    getUserData
};