"use strict";

const io = require("socket.io")(4000);

io.on("connection", (socket) => {
socket.on("new-flight", (flightDetails) => {
io.emit("new-flight", flightDetails);
console.log(`Flight {
event: 'new-flight',
time: ${new Date().toISOString()},
Details: {
flightID: ${flightDetails.flightID},
airLine: ${flightDetails.airLine},
pilot: ${flightDetails.pilot},
destination: ${flightDetails.destination}
}
}`);
});

socket.on("arrived", (flightDetails) => {
io.emit("arrived", flightDetails);
console.log(`Flight {
event: 'arrived',
time: ${new Date().toISOString()},
Details: {
flightID: ${flightDetails.flightID},
airLine: ${flightDetails.airLine},
pilot: ${flightDetails.pilot},
destination: ${flightDetails.destination}
}
}`);
});
});

const airlineIO = io.of("/airline");
airlineIO.on("connection", (socket) => {
socket.on("took-off", (flightDetails) => {
console.log(`Flight {
event: 'took-off',
time: ${new Date().toISOString()},
Details: {
flightID: ${flightDetails.flightID},
airLine: ${flightDetails.airLine},
pilot: ${flightDetails.pilot},
destination: ${flightDetails.destination}
}
}`);
});
});