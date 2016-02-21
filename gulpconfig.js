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
		proxy: 'dev.torounit.com', //set your env hostname.
		files: [
			"./**/*.css",
			"./**/*.php",
			"./**/*.html"
		]
	}
};
