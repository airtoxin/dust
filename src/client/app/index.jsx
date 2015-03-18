var config = require( '../../../config/default' ).world;
var React = require( 'react' );
var ReactCanvas = require( 'react-canvas' );

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;

var App = React.createClass( {
	propTypes: {
		data: React.PropTypes.object.isRequired
	},
	render: function () {
		var self = this;
		var date = new Date( this.props.data.date ).toString();
		return (
			<Surface
				width={config.width}
				height={config.height}
				left={0}
				top={0}
			>
				<Text style={self.getTextStyle()}>
					{''+this.props.data.date}
				</Text>
			</Surface>
		);
	},
	getTextStyle: function () {
		return {
			top: 250,
			left: 0,
			width: config.width,
			height: config.height,
			lineHeight: 20,
			fontSize: 22
		};
	}
} );

module.exports = App;
