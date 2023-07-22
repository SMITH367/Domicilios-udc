import io from "socket.io-client";
const socket = io("ws://socketio.fly.dev:80");


export default socket