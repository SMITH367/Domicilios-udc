import {
    FetchData
} from "./fetchData";


const getOrders = async (url, tokenValidator) => {

    const fetch = new FetchData(url);
    const dataOrder = await fetch.FetchDataApiGet(tokenValidator)

    if (dataOrder.length > 0 && dataOrder !== undefined) {
        return dataOrder
    }

};

export {
    getOrders
};