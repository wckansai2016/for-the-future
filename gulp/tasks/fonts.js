'use strict';

// ==================================
//
// Load modules.
//
// ==================================

import config from '../config.js';
import gulp from 'gulp';

// ==================================
//
// Fonts
//
// ==================================

gulp.task('fonts', function () {

	return gulp.src([config.fonts.src])
		.pipe(gulp.dest(config.fonts.dest));
});
