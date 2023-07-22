const closeSesion = (setUserDataStatus) => {
    setUserDataStatus({
        login: false,
        name: null,
        email: null,
        identification: null,
        phoneNumber: null,
        typeUser: null,
        progressOrder: localStorage.getItem("progressOrder"),
        processOrder: localStorage.getItem("process-order"),

    });
    localStorage.removeItem("login");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("identification");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("token");
    localStorage.removeItem("typeUser");
    localStorage.removeItem("vehicle")
    localStorage.removeItem("plate")

    window.location.hash="/"
};

export {
    closeSesion
}