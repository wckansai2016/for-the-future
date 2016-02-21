/*
 *
 * Gulp User Settings. Override Default Settings.
 *
 */

export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		proxy: 'dev.torounit.com',
		files: [
			"./**/*.css",
			"./**/*.php",
			"./**/*.html"
		]
	}
};
