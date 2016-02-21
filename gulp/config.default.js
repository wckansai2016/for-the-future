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
		src: './sass/**/*.{sass,scss}',
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
			entries: dir.src + '/scripts/main.js',
			extensions: ['js', 'jsx']
		},
		dest: dir.dist + '/scripts/',
		filename: 'bundle.js'

	}
};
