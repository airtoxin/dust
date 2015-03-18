( function () {
	var React = require( 'react' );
	var App = require( './app' );
	var config = require( '../../config/default.json' );

	window.addEventListener( 'load', function () {
		var server = config.app.host + ':' + config.app.port;
		var socket = window.io( server );
		React.render( <App />, document.body );
	} );
}() );
