import {
    FetchData
} from "./fetchData";


const getOrderData = async (url, body, method, tokenValidator) => {


    const fetch = new FetchData(url);
    const dataOrder = await fetch.FetchDataApi(body, method, tokenValidator)

    console.log(dataOrder)
    if (dataOrder !== undefined) {
        return dataOrder
    }

};

export {
    getOrderData
};