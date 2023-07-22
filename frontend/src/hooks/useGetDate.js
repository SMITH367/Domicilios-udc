const getDate = () => {

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return date
}


const calculateMonth = (monthNumber) =>{

    let month = ""
    switch(monthNumber){
        
        case 1: month = "Enero"
        break
        case 2: month = "Febrero"
        break
        case 3: month = "Marzo"
        break
        case 4: month = "Abril"
        break
        case 5: month = "Mayo"
        break
        case 6: month = "Junio"
        break
        case 7: month = "Julio"
        break
        case 8: month = "Agosto"
        break
        case 9: month = "Septiembre"
        break
        case 10: month = "Octubre"
        break
        case 11: month = "Noviembre"
        break
        case 12: month = "Diciembre"
        break

        default : month = ""
    }

    return month
}

export {
    getDate,
    calculateMonth
}