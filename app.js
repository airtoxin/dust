var config = require( 'config' );
var express = require( 'express' );
var app = express();
var http = require( 'http' ).Server( app );
var Server = require( './src/server' );
new Server( http );

app.use( express.static( __dirname + '/public' ) );

app.get( '/', function ( req, res ) {
	res.send( 'index.html' );
} );

http.listen( config.app.port, function () {
	console.log( 'app run on' );
	console.log( config.app.host + ':' + config.app.port );
} );
