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
		proxy: 'localhost:8080', //set your env hostname.
		files: [
			"./style.css",
			"./bundle.js",
			"./**/*.php",
			"./**/*.png",
			"./**/*.svg",
			"./**/*.jpg"
		]
	}
};
