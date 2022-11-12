'use strict';
const events = require('./events');
const { faker } = require('@faker-js/faker');
require('./pilot');

setInterval(() => {
    let Flight = {
        event: 'new-flight',
        time: new Date().toLocaleString(),
        Details: {
        airLine: ' Jordanian Airlines',
        flightID: faker.datatype.uuid(),
        pilot: faker.name.findName(),
        destination: faker.address.cityName()
        }
    }
    console.log(`Manager: new flight with ID ‘${Flight.Details.flightID}’ have been scheduled`);
    events.emit('new-flight', Flight)
}, 10000)


events.on('arrived', flightArrived);
function flightArrived(Flight) {
    setTimeout(() => {
    console.log(`Manager: thank you for the flight, ${Flight.Details.pilot}`);
    }, 30)
}