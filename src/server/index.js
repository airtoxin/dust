var Socket = require( './socket' );

module.exports = ( function () {
	return function ( http ) {
		var self = this;

		self.socket = new Socket( http );

		self.socket.on( 'connection', function ( socket ) {
			console.log("@connection");
		} );

		self.socket.on( 'disconnect', function () {
			console.log("@disconnect");
		} );
	}
}() );
