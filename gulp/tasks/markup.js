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

gulp.task('markup', function () {

	return gulp.src([config.markup.src])
		.pipe(gulp.dest(config.markup.dest));
});
