import {
    FetchData
} from "./fetchData";
import {
    lengthValidation,
    emailValidation,
    numberValidation,
} from "./validations";

const createUser = async (e, userName, email, password, passwordConf, ident, phoneNumber) => {

    e.preventDefault()
    if (
        lengthValidation(email) === true &&
        lengthValidation(password) === true &&
        lengthValidation(userName) === true &&
        lengthValidation(passwordConf) &&
        lengthValidation(ident) &&
        lengthValidation(phoneNumber)
    ) {
        if (numberValidation(ident)) {
            if (emailValidation(email) === true) {
                if (passwordConf === password && password.length > 5) {
                    const url = "https://tired-hare-getup.cyclic.app/user"
                    const fetch = new FetchData(url);

                    const dataUser = await fetch.FetchDataApi({
                            name: userName,
                            email: email,
                            password: password,
                            identification: ident,
                            phoneNumber: phoneNumber
                        },
                        "POST"
                    );

                    if (dataUser.added === "true") {
                        alert("Usuario creado con exito");
                        window.location.href = "/";
                    } else
                        alert("El usuario o email ya existe");
                } else
                    alert("Las contraseñas deben coincidir y ser de minimo 6 caracteres");
            } else
                alert("Email invalido");
        } else
            alert("Identificacion invalida")
    } else
        alert("No puedes ingresar caracteres vacios");

};

export {
    createUser
};