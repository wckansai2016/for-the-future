import dir from "./config.directory";

export default  {

	fonts: {
		src: dir.src + '/fonts/**/*',
		dest: dir.dist + '/fonts'
	},

	images: {
		src: dir.src + '/images/**/*.{png,jpg,gif,svg,jpg}',
		dest: dir.dist + '/images'
	},

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		//proxy: ' localhost:8080',
		files: [
			dir.dist + '/**',
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
		src: dir.src + '/styles/**/*.scss',
		dest: dir.dist + '/styles',
		sourceRoot: '../../../assets/src/styles'
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
			entries: dir.src + '/scripts/all.js',
			extensions: ['js', 'jsx']
		},
		dest: dir.dist + '/scripts/',
		filename: 'all.js'

	}
};
