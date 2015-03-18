var _ = require( 'lodash' );
var config = require( 'config' );
var Socket = require( './socket' );

module.exports = ( function () {
	return function ( http ) {
		var self = this;

		self.socket = new Socket( http );

		var interval;
		self.socket.on( 'connection', function ( socket ) {
			console.log("@connection");

			var dusts = self._getInitialDusts();
			interval = setInterval( function () {
				dusts = self._updateDusts( dusts );
				socket.emit( 'update', {
					dusts: dusts,
					date: Date.now(),
					width: config.world.width,
					height: config.world.height
				} );
			}, 100 );
		} );

		self.socket.on( 'disconnect', function () {
			console.log("@disconnect");
			clearInterval( interval );
		} );

		self._getInitialDusts = function () {
			return _.map( _.range( 30 ), function ( i ) {
				return {
					id: i,
					x: _.random( config.world.width ),
					y: _.random( config.world.height )
				};
			} );
		};

		self._updateDusts = function ( dusts ) {
			return _.map( dusts, function ( dust ) {
				return {
					id: dust.id,
					x: Math.min( Math.max( 0, dust.x + _.random( -1, 1 ) ), config.world.width ),
					y: Math.min( Math.max( 0, dust.y + _.random( -1, 1 ) ), config.world.height )
				};
			} );
		};
	}
}() );
