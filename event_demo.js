const EventEmiiter = require('events');

// Create class
class MyEmitter extends EventEmiiter{}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', ()=>console.log('Event fired!'));

// Init Event / Emit

myEmitter.emit('event');

