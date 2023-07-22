const getOrderNumberByHash = (stringToEval) => {

    let getOnlyNumbers = /(\d+)/g;

    const orderNumber = stringToEval.match(getOnlyNumbers)

    return orderNumber.toString()

}

export {
    getOrderNumberByHash
}