var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var browserify = require( 'browserify' );
var browserifyInc = require( 'browserify-incremental' );
var reactify = require( 'reactify' );
var xtend = require( 'xtend' );
var source = require( 'vinyl-source-stream' );
var server = require( 'gulp-express' );

gulp.task( 'browserify', function () {
	var bundler = browserify( xtend( browserifyInc.args, {
		entries: [ './src/client/index.jsx' ],
		extensions: [ '.jsx' ],
		transform: [ reactify ],
		debug: true
	} ) );
	browserifyInc( bundler, { cacheFile: './browserify-cache.json' } );
	return bundler.bundle()
		.pipe( source( 'main.js' ) )
		.pipe( gulp.dest( 'public/js' ) );
} );

gulp.task( 'server', function () {
	server.run( {
		file: './app.js'
	} );
} );

gulp.task( 'watch', function () {
	gulp.watch( './src/client/**/*', [ 'browserify' ] );
	gulp.watch( './src/server/**/*', [ server.notify ] );
} );

gulp.task( 'default', [ 'browserify', 'server', 'watch' ] );
