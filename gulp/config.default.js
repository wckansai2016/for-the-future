export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		//proxy: ' localhost:8080',
		files: [
			"./**/*.css",
			"./**/*.php",
			"./**/*.html"
		]
	},

	/**
	 *
	 * sass Compile Option.
	 *
	 */
	sass: {
		src: './src/styles/**/*.{sass,scss}',
		dest: './'
	},

	/**
	 *
	 * JavaScript.
	 *
	 */
	browserify: {
		bundleOption: {
			cache: {}, packageCache: {}, fullPaths: false,
			debug: true,
			entries: './src/scripts/main.js',
			extensions: [ 'js' ]
		},
		dest: './',
		filename: 'bundle.js'

	}
};
