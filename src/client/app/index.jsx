var _ = require( 'lodash' );
var React = require( 'react' );
var ReactCanvas = require( 'react-canvas' );

var Surface = ReactCanvas.Surface;
var Text = ReactCanvas.Text;

var App = React.createClass( {
	propTypes: {
		data: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		return {
			clickCount: 0
		};
	},
	render: function () {
		var self = this;
		var d = this.props.data;
		var circles = _.map( d.dusts, function ( dust ) {
			return (
				<circle
					cx={dust.x}
					cy={dust.y}
					r={1}
					key={dust.id}
					onClick={self.handleClickDust}
				/>
			);
		} );
		return (
			<div>
				<h1 style={{position:'absolute'}}>Clicks: {this.state.clickCount}</h1>
				<svg width={d.width} height={d.height}>
					{circles}
				</svg>
			</div>
		);
	},
	handleClickDust: function () {
		console.log("@this.state.clickCount:", this.state.clickCount);
		this.setState( {
			clickCount: this.state.clickCount + 1
		} );
	}
} );

module.exports = App;
