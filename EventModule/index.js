// create your own events in nodejs 
const EventEmitter = require('events');

// create an event emitter instance 
const event = new EventEmitter();

// event define which we want to do to 
// listerner function 
event.on('checkpage', (sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`)
})


// event emit call the event which we want to fire 
event.emit("checkpage", 200, "ok");