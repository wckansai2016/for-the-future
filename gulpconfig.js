/*
 *
 * Gulp User Settings. Override Default Settings.
 *
 */

import dir from "./gulp/config.directory";

export default  {

	/**
	 *
	 * browserSync.
	 *
	 */
	browserSync: {
		proxy: 'dev.torounit.com',
		files: [
			dir.dist + '/**',
			"./**/*.php",
			"./**/*.html"
		]
	}
};
