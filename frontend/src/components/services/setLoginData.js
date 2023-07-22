const setLoginData = (dataUser, setUserDataStatus, userType, stateUser) => {

    const login = true;
    localStorage.setItem("typeUser", userType)
    setUserDataStatus({
        login: login.toString(),
        name: dataUser.name,
        email: dataUser.email,
        identification: dataUser.identification,
        phoneNumber: dataUser.phoneNumber,
        typeUser: userType,
        processOrder: localStorage.getItem("process-order"),
        progressOrder: localStorage.getItem("progressOrder"),
        plate: dataUser.plate,
        vehicle: dataUser.vehicle
    });


    localStorage.setItem("login", "true");
    localStorage.setItem("name", dataUser.name)
    localStorage.setItem("email", dataUser.email)

    if (stateUser === "login") {
        localStorage.setItem("token", dataUser.accessToken)
    }
    localStorage.setItem("phoneNumber", dataUser.phoneNumber)
    localStorage.setItem("identification", dataUser.identification)
    

    if (userType === "deliveryMan") {

        localStorage.setItem("plate", dataUser.plate)
        localStorage.setItem("vehicle", dataUser.vehicle)
    }
}




export {
    setLoginData
}