const useValidateLogin = (userData) => {
    let urlToRedirect = "";
    let redirect = 0;

    if (userData.login === "true" && userData.typeUser === "deliveryMan") {
        urlToRedirect = "/domiciliario/inicio";
        redirect = 1;
    } else if (userData.login === "true" && userData.typeUser === "user") {
        urlToRedirect = "/usuario";
        redirect = 2;
    } else if (userData.login === "true" && userData.typeUser !== "deliveryMan" && userData.typeUser !== "admin" ) {
        urlToRedirect = "/usuario"
        redirect = 3;
    } else if (userData.login === "true" && userData.typeUser === "admin") {
        urlToRedirect = "/admin/dashboard/home"
        redirect = 4;
    }

    return {
        urlToRedirect,
        redirect
    }
}

export {
    useValidateLogin
}