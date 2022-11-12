'use strict';
const events = require('./events');
events.on('new-flight', tookOff);

function tookOff(payload) {
    setTimeout(() => {
        let Flight = {
            event: 'took_off',
            time: new Date().toLocaleString(),
            Details: {
            airLine: 'Jordanian Airlines',
            flightID: payload.Details.flightID,
            pilot: payload.Details.pilot,
            destination: payload.Details.destination
            }
        }
        console.log(`Pilot: flight with ID ‘${payload.Details.flightID}’ took-off`);
        events.emit('took-off', Flight)
    }, 4000);
}
events.on('took-off', flightArrived);
function flightArrived(payload) {
    setTimeout(() => {
        let Flight = {
            event: 'arrived',
            time: new Date().toLocaleString(),
            Details: {
            airLine: 'Jordanian Airlines',
            flightID: payload.Details.flightID,
            pilot: payload.Details.pilot,
            destination: payload.Details.destination
            }
        }
        console.log(`Pilot: flight with ID '${payload.Details.flightID}' has arrived`);
        events.emit('arrived', Flight)

    }, 3000)

}



