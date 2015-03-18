var React = require( 'react' );
var ReactCanvas = require( 'react-canvas' );

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

var App = React.createClass( {
	render: function () {
		var surfaceWidth = window.innerWidth;
		var surfaceHeight = window.innerHeight;

		return (
			<div/>
		);
	}
} );

module.exports = App;
