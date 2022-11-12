"use strict";

const io = require("socket.io-client");

const airlineSocket = io.connect(`${process.env.PORT}/airline` || "http://localhost:4000/airline");
const socket = io(process.env.PORT || "http://localhost:4000");

socket.on("new-flight", (flightDetails) => {
  setTimeout(() => {
    console.log(`Pilot: flight with ID ${flightDetails.flightID} took-off`);
    airlineSocket.emit("took-off", flightDetails);
  }, 4000);

  setTimeout(() => {
    console.log(`Pilot: flight with ID ${flightDetails.flightID} arrived`);
    socket.emit("arrived", flightDetails);
  }, 7000);
});