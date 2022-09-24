const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function (arg) {
    console.log('Listener Called', arg);
});

console.log('Emiting...!')
emitter.emit('messageLogged', { id: 1, url: 'http://myUrl' });

setTimeout(() => {
    console.log('Emiting From SetTimeOut');
    emitter.emit('messageLogged', { id: 2, from: 'SetTimeOut' });
}, 2000);