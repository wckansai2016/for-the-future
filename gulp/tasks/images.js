'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import config from '../config.js';
import handleErrors from '../util/handleErrors.js';
import gulp from 'gulp';
import changed  from 'gulp-changed';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';


// ==================================
//
// minify images.
//
// ==================================

gulp.task('images', function () {
	return gulp.src(config.images.src)
		.pipe(changed(config.images.dest))
		.pipe(plumber({
			errorHandler: handleErrors
		}))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [
				{
					removeViewBox: false
				}
			]
		}))
		.pipe(gulp.dest(config.images.dest));
});