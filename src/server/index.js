var Socket = require( './socket' );

module.exports = ( function () {
	return function ( http ) {
		var self = this;

		self.socket = new Socket( http );

		var interval;
		self.socket.on( 'connection', function ( socket ) {
			console.log("@connection");
			interval = setInterval( function () {
				socket.emit( 'update', {
					hoge: 'hogeeeee',
					fuga: 'fugaaaaa',
					date: Date.now()
				} );
			}, 1 );
		} );

		self.socket.on( 'disconnect', function () {
			console.log("@disconnect");
			clearInterval( interval );
		} );
	}
}() );
