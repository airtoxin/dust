var util = require( 'util' );
var EventEmitter2 = require( 'eventemitter2' ).EventEmitter2;
var socketIO = require( 'socket.io' );

var Socket = ( function () {
	return function ( http ) {
		var self = this;
		var io = socketIO.listen( http );

		io.on( 'connection', function ( socket ) {
			self.emit( 'connection', socket );
			socket.on( 'disconnect', function () {
				self.emit( 'disconnect' );
			} );
		} );
	};
}() );

util.inherits( Socket, EventEmitter2 );

module.exports = Socket;
