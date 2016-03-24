'use strict';

// ==================================
//
// distribution
//
// ==================================
import gulp from 'gulp';
import debug from 'gulp-debug';
import runSequence from 'run-sequence';

gulp.task('copy', function() {
	return gulp.src(
			[
				'./**/*.*',
				"!./.github/**",
				"!./dist/**",
				"!./bin/**",
				"!./gulp/**",
				"!./gulpconfig.js",
				"!./gulpconfig.js.sample",
				"!./gulpfile.babel.js",
				"!.travis.yml",
				"!.gitignore",
				"!.editorconfig",
				"!.github/**",
				"!composer.json",
				"!bower.json",
				"!package.json",
				"!./node_modules/**/*.*"
			],
			{ base: './' }
		)
		.pipe( debug() )
		.pipe( gulp.dest( 'dist' ) );
} );

gulp.task('dist', function(cb){
	return runSequence( 'build', 'copy', cb );
});
