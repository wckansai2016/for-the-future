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
		proxy: 'wp.potato4d.me', //各の開発環境に合わせて変更してください。
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
