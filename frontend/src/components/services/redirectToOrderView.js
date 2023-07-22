const redirectToOrderView = (e, orderNumber) => {

    e.preventDefault();
    window.location.hash = "#/usuario/orden/" + orderNumber;

}


export {
    redirectToOrderView
}