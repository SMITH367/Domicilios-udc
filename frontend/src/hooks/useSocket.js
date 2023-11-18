import io from "socket.io-client";
const socket = io("ws://socketioserverse.fly.dev:80");


export default socket