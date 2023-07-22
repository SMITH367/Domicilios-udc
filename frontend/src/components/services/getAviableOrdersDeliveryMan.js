import {
    FetchData
} from "./fetchData";


const getAviableOrdersDeliveryMan = async (url, deliveryManName) => {
    const fetch = new FetchData(url);
    try {
        const getDataDelivery = await fetch.FetchDataApi({
                deliveryMan: deliveryManName
            },
            "POST"
        );
        return getDataDelivery
    } catch (e) {
        console.log(e)
    }

};

export {
    getAviableOrdersDeliveryMan
};