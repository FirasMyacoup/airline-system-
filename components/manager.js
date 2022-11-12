"use strict";

const io = require("socket.io-client");
const socket = io(process.env.PORT || "http://localhost:4000");

const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

setInterval(() => {
  let country = faker.address.country();
  let city = faker.address.city();
  let pilotName = faker.name.fullName();
  let id = uuidv4();

  const flightDetails = {
    flightID: id,
    airLine: "Royal Jordanian Airlines",
    pilot: pilotName,
    destination: `${city}, ${country}`,
  };

  console.log(`Manager: new flight with ID ${flightDetails.flightID} have been scheduled`);
  socket.emit("new-flight", flightDetails);
}, 10000);

socket.on("arrived", (flightDetails) => {
  console.log(`Manager: we’re greatly thankful for the amazing flight, ${flightDetails.pilot}`);
});