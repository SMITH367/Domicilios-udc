import {
    FetchData
} from "./fetchData";
import {
    lengthValidation,
    emailValidation,
} from "./validations";
import {
    setLoginData
} from "./setLoginData"
import {
    Navigate
} from "react-router-dom";

const loginSesion = async (e, setUserDataStatus, email, password, userType) => {
    e.preventDefault()
    if (lengthValidation(email) === true && lengthValidation(password) === true) {
        if (emailValidation(email) === true) {

            let url = ""

            const urlUser = "https://tired-hare-getup.cyclic.app/user/login"
            const urlDeliveryMan = "https://tired-hare-getup.cyclic.app/deliveryMan/login"
            const urlAdmin = "https://tired-hare-getup.cyclic.app/admin/login"

            if (userType === "user") {
                url = urlUser
            } else if (userType === "deliveryMan") {
                url = urlDeliveryMan
            }
            else if(userType==="admin"){
                url = urlAdmin
            }

            const fetch = new FetchData(url);

            const dataUser = await fetch.FetchDataApi({
                    email: email,
                    password: password,
                },
                "POST"
            );
            
            console.log(userType)

            if (dataUser !== false) {

                setLoginData(dataUser, setUserDataStatus, userType, "login")

                if (userType === "user") {
                    return <Navigate to = {
                        "/usuario"
                    }
                    />;
                } else if (userType === "deliveryMan") {

                    return <Navigate to = {
                        "/domiciliario/inicio"
                    }
                    />;
                }
                else if(userType==="admin")
                {
                    return <Navigate to = {
                        "/admin/dashboard/home"
                    }
                    />;
                }

            } else {
                alert("Usuario o contraseña invalidos");
            }
        } else {
            alert("Email invalido");
        }
    } else {
        alert("No puedes ingresar caracteres vacios");
    }
};

export {
    loginSesion
};