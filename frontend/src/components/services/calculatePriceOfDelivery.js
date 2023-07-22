const data = [{
    a: "manga",
    b: "manga",
    timeDelivery: "5 minutos",
    price: 7000
},
{
    a: "manga",
    b: "bocagrande",
    timeDelivery: "10 minutos",
    price: 14000
},
{
    a: "manga",
    b: "crespo",
    timeDelivery: "20 minutos",
    price: 15000
},
{
    a: "bocagrande",
    b: "crespo",
    timeDelivery: "15 minutos",
    price: 14000
},
{
    a: "bocagrande",
    b: "bocagrande",
    timeDelivery: "5 minutos",
    price: 9000
}, {
    a: "crespo",
    b: "crespo",
    timeDelivery: "5 minutos",
    price: 9000
},
{
    a: "pie de la popa",
    b: "pie de la popa",
    timeDelivery: "5 minutos",
    price: 9000
},
{
    a: "pie de la popa",
    b: "manga",
    timeDelivery: "10 minutos",
    price: 12000
},
{
    a: "pie de la popa",
    b: "crespo",
    timeDelivery: "15 minutos",
    price: 12000
},
{
    a: "pie de la popa",
    b: "bocagrande",
    timeDelivery: "25 minutos",
    price: 15000
},
{
    a: "castillo grande",
    b: "castillo grande",
    timeDelivery: "10 minutos",
    price: 9000
},
{
    a: "castillo grande",
    b: "bocagrande",
    timeDelivery: "12 minutos",
    price: 10000
},

{
    a: "castillo grande",
    b: "crespo",
    timeDelivery: "12 minutos",
    price: 10000
},

{
    a: "castillo grande",
    b: "manga",
    timeDelivery: "20 minutos",
    price: 15000
},
{
    a: "castillo grande",
    b: "pie de la popa",
    timeDelivery: "20 minutos",
    price: 15000
},
{
    a: "el bosque",
    b: "el bosque",
    timeDelivery: "10 minutos",
    price: 9000
},
{
    a: "el bosque",
    b: "manga",
    timeDelivery: "12 minutos",
    price: 9000
},
{
    a: "el bosque",
    b: "bocagrande",
    timeDelivery: "15 minutos",
    price: 15000
},
{
    a: "el bosque",
    b: "pie de la popa",
    timeDelivery: "12 minutos",
    price: 10000
},
{
    a: "el bosque",
    b: "crespo",
    timeDelivery: "20 minutos",
    price: 13000
},
{
    a: "el bosque",
    b: "castillo grande",
    timeDelivery: "20 minutos",
    price: 15000
},
{
    a: "la castellana",
    b: "la castellana",
    timeDelivery: "5 minutos",
    price: 9000
},
{
    a: "la castellana",
    b: "el bosque",
    timeDelivery: "10 minutos",
    price: 10000
},
{
    a: "la castellana",
    b: "pie de la popa",
    timeDelivery: "13 minutos",
    price: 12000
},
{
    a: "la castellana",
    b: "manga",
    timeDelivery: "15 minutos",
    price: 13000
},
{
    a: "la castellana",
    b: "crespo",
    timeDelivery: "20 minutos",
    price: 14000
},
{
    a: "la castellana",
    b: "bocagrande",
    timeDelivery: "25 minutos",
    price: 14000
},
{
    a: "la castellana",
    b: "castillo grande",
    timeDelivery: "30 minutos",
    price: 16000
},
{
    a: "conj res zona sur",
    b: "conj res zona sur",
    timeDelivery: "10 minutos",
    price: 9000
},
{
    a: "conj res zona sur",
    b: "la castellana",
    timeDelivery: "14 minutos",
    price: 11000
},
{
    a: "conj res zona sur",
    b: "el bosque",
    timeDelivery: "20 minutos",
    price: 13000
},
{
    a: "conj res zona sur",
    b: "pie de la popa",
    timeDelivery: "25 minutos",
    price: 14000
},
{
    a: "conj res zona sur",
    b: "manga",
    timeDelivery: "25 minutos",
    price: 14000
},
{
    a: "conj res zona sur",
    b: "crespo",
    timeDelivery: "25 minutos",
    price: 16000
},
{
    a: "conj res zona sur",
    b: "bocagrande",
    timeDelivery: "25 minutos",
    price: 16000
},
{
    a: "conj res zona sur",
    b: "castillo grande",
    timeDelivery: "25 minutos",
    price: 18000
},
]

const calculateCotizationOfOrder = (collection, delivery) => {

let orderData = {}

data.forEach(element => {
    if (((element.a === collection && element.b === delivery)) || ((element.b === collection && element.a === delivery))) {
        orderData.timeDelivery = element.timeDelivery
        orderData.price = element.price
    }
});
return orderData
}
export {
calculateCotizationOfOrder
}