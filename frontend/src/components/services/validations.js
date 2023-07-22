const lengthValidation = (data) => {
    return data !== undefined && data.length > 0
}

const emailValidation = (email) => {
    // eslint-disable-next-line
    const testEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    let valEmail = testEmail.test(email)
    return valEmail
}

const numberValidation = (value) => {
    var valoresAceptados = /^[0-9]+$/;
    if (value.match(valoresAceptados)) {
        return true
    }
    return false
}

const characterValidation = (value, n) => {
    return value.toString().length === n
}

export {
    lengthValidation,
    emailValidation,
    numberValidation,
    characterValidation,
}