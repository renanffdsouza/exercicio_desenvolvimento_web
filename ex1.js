// Importa o modulo de eventos
var events = require('events');

//cria um novo objeto chamado eventEmitter
var eventEmitter = new events.EventEmitter();

//  Cria um event handler
var listener1 = function listener1() {
    console.log('listener1 executed.');
}

//  Cria um event handler
var listener2 = function listener2() {
    console.log('listener2 executed.');
}

//  adiciona um listerner ao final de array de listeners 
eventEmitter.addListener('connection', listener1);

// Vincula o event handler ao event connection
eventEmitter.on('connection', listener2);

//
var eventListeners = require('events').EventEmitter.listenerCount
(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

//  executa o listener contido no evento connection
eventEmitter.emit('connection');

//  remove listener1 do array de listeners
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

//  executa o listener contido no evento connection
eventEmitter.emit('connection');

//  apresenta lista de listener contido no evento connection 
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Apresenta Programa ended no console
console.log("Program Ended.");
